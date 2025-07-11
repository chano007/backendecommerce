import * as productoController from '../controllers/producto.controller.js';
import * as sproducto from '../services/producto.service.js';

// Mockear funciones del servicio para aislar el controller
jest.mock('../services/producto.service.js');

describe('producto.controller', () => {
  let req, res;

  beforeEach(() => {
    req = {};
    res = {
      json: jest.fn(),
      status: jest.fn(() => res), // para encadenar .json después de status
    };
    jest.clearAllMocks();
  });

  test('getAll responde con array de productos', async () => {
    const productosMock = [{ id: 1, nombre: 'Prod1' }, { id: 2, nombre: 'Prod2' }];
    sproducto.getAll.mockResolvedValue(productosMock);

    await productoController.getAll(req, res);

    expect(sproducto.getAll).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith(productosMock);
  });

  test('getAll maneja error', async () => {
    sproducto.getAll.mockRejectedValue(new Error('Fallo'));

    await productoController.getAll(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Error obteniendo registros" });
  });

  test('getById responde con producto', async () => {
    const productoMock = { id_producto: 1, nombre: 'Prod1' };
    req.params = { id: '1' };
    sproducto.getById.mockResolvedValue(productoMock);

    await productoController.getById(req, res);

    expect(sproducto.getById).toHaveBeenCalledWith('1');
    expect(res.json).toHaveBeenCalledWith(productoMock);
  });

  test('getById maneja error', async () => {
    req.params = { id: '1' };
    sproducto.getById.mockRejectedValue(new Error('Error'));

    await productoController.getById(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Error obteniendo registro" });
  });

  test('create responde con idProducto', async () => {
    req.body = {
      nombre: 'Producto Test',
      descripcion: 'Descripción de prueba',
      precio: 99.99,
    };

    const nuevoProducto = { idProducto: 123 };
    sproducto.create.mockResolvedValue(nuevoProducto);

    await productoController.create(req, res);

    expect(sproducto.create).toHaveBeenCalledWith(req.body);
    expect(res.json).toHaveBeenCalledWith(nuevoProducto);
  });

  test('create maneja error', async () => {
    req.body = {
      nombre: 'Producto Test',
      descripcion: 'Descripción de prueba',
      precio: 99.99,
    };

    sproducto.create.mockRejectedValue(new Error('Error'));

    await productoController.create(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Error creando registro" });
  });

  test('update responde con numRegistros', async () => {
    req.params = { id: '123' };
    req.body = {
      nombre: 'Producto Actualizado',
      descripcion: 'Actualizada',
      precio: 79.99,
    };

    const updateResult = { numRegistros: 1 };
    sproducto.update.mockResolvedValue(updateResult);

    await productoController.update(req, res);

    expect(sproducto.update).toHaveBeenCalledWith('123', req.body);
    expect(res.json).toHaveBeenCalledWith(updateResult);
  });

  test('update maneja error', async () => {
    req.params = { id: '123' };
    req.body = {
      nombre: 'Producto Actualizado',
      descripcion: 'Actualizada',
      precio: 79.99,
    };

    sproducto.update.mockRejectedValue(new Error('Error'));

    await productoController.update(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Error actualizando registro" });
  });

  test('delete responde con numRegistros', async () => {
    req.params = { id: '123' };
    const deleteResult = { numRegistros: 1 };
    sproducto.delete.mockResolvedValue(deleteResult);

    await productoController.delete(req, res);

    expect(sproducto.delete).toHaveBeenCalledWith('123');
    expect(res.json).toHaveBeenCalledWith(deleteResult);
  });

  test('delete maneja error', async () => {
    req.params = { id: '123' };
    sproducto.delete.mockRejectedValue(new Error('Error'));

    await productoController.delete(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: "Error eliminando registro" });
  });
});
