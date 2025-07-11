import http from 'k6/http';
import { check, sleep } from 'k6';

const BASE_URL = 'http://localhost:4005/api/v1/producto';

export let options = {
  vus: 5,
  duration: '30s',
};

function tryParseJson(body) {
  try {
    return JSON.parse(body);
  } catch (e) {
    return null;
  }
}

export default function () {
  // 1. GET /producto (getAll)
  let res = http.get(`${BASE_URL}/`);
  let body = tryParseJson(res.body);

  check(res, {
    'getAll status 200': (r) => r.status === 200,
    'getAll response is array': () => Array.isArray(body),
  }) || console.error(`getAll failed response: ${res.body}`);

  // 2. GET /producto/:id (getById) con id=1
  res = http.get(`${BASE_URL}/1`);
  body = tryParseJson(res.body);

  check(res, {
    'getById status 200': (r) => r.status === 200,
    'getById response has id_producto': () => body && body.id_producto !== undefined,
  }) || console.error(`getById failed response: ${res.body}`);

  // 3. POST /producto (create)
  const createPayload = JSON.stringify({
    nombre: `ProductoTest_${Math.random()}`,
    descripcion: 'Descripción de prueba',
    precio: 99.99,
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  res = http.post(`${BASE_URL}/`, createPayload, params);
  body = tryParseJson(res.body);

  if (!body || !body.idProducto) {
    console.error('No se recibió idProducto en la respuesta de create, abortando test.');
    return;
  }

  check(res, {
    'create status 200': (r) => r.status === 200,
    'create response tiene idProducto': () => body && body.idProducto !== undefined,
  }) || console.error(`create failed response: ${res.body}`);

  const idProductoCreado = body.idProducto;

  // 4. PUT /producto/:id (update)
  const updatePayload = JSON.stringify({
    nombre: `ProductoActualizado_${Math.random()}`,
    descripcion: 'Descripción actualizada',
    precio: 79.99,
  });

  res = http.put(`${BASE_URL}/${idProductoCreado}`, updatePayload, params);
  body = tryParseJson(res.body);

  check(res, {
    'update status 200': (r) => r.status === 200,
    'update numRegistros > 0': () => body && body.numRegistros > 0,
  }) || console.error(`update failed response: ${res.body}`);

  // 5. DELETE /producto/:id (delete)
  res = http.del(`${BASE_URL}/${idProductoCreado}`, null, params);
  body = tryParseJson(res.body);

  check(res, {
    'delete status 200': (r) => r.status === 200,
    'delete numRegistros > 0': () => body && body.numRegistros > 0,
  }) || console.error(`delete failed response: ${res.body}`);

  sleep(1);
}
