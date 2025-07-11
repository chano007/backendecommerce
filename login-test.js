import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '30s', target: 5 },
  ],
};

export default function () {
  const url = 'http://localhost:4005/api/v1/login';
  const payload = JSON.stringify({
    username: 'usuarioEjemplo',
    password: '1234',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'status is 200': (r) => r.status === 200,
    'response has token': (r) => r.json('token') !== undefined,
  });

  sleep(1);
}
