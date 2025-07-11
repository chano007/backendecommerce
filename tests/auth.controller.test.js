import { jest } from '@jest/globals';

// Mock dinámico de los módulos
jest.unstable_mockModule('../services/seguridad.service.js', () => ({
  login: jest.fn()
}));

jest.unstable_mockModule('../config/auth.js', () => ({
  generateToken: jest.fn(),
  generateRefreshToken: jest.fn()
}));

// Importa después de los mocks
const sseguridad = await import('../services/seguridad.service.js');
const auth = await import('../config/auth.js');
const { login } = await import('../controllers/seguridad.controller.js');

describe('Auth controller - login', () => {
  let req;
  let res;

  beforeEach(() => {
    req = {
      body: { password: '1234' }
    };

    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    jest.clearAllMocks();
  });

  test('✔️ login success', async () => {
    sseguridad.login.mockResolvedValue([
      {
        id_usuario: 1,
        correo_usuario: 'test@example.com',
        rol: 'admin',
        password: '1234'
      }
    ]);

    auth.generateToken.mockReturnValue('token123');
    auth.generateRefreshToken.mockReturnValue('refreshToken123');

    await login(req, res);

    expect(res.json).toHaveBeenCalledWith({
      token: 'token123',
      refreshToken: 'refreshToken123',
      user: {
        id_usuario: 1,
        email: 'test@example.com',
        rol: 'admin'
      }
    });
  });

  test('❌ contraseña incorrecta', async () => {
    sseguridad.login.mockResolvedValue([
      {
        id_usuario: 1,
        correo_usuario: 'test@example.com',
        rol: 'admin',
        password: 'otroPassword'
      }
    ]);

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: 'Acceso no autorizado' });
  });

  test('❌ usuario no encontrado', async () => {
    sseguridad.login.mockResolvedValue([]); // No hay usuario

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: 'Acceso no autorizado' });
  });

  test('💥 error en sseguridad.login()', async () => {
    sseguridad.login.mockRejectedValue(new Error('DB error'));

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({ error: 'Error obteniendo registros' });
  });
});
