import * as slogin from "../services/login.service.js";

export const verifyLogin = function (req, res) {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({ message: 'Usuario y contraseña requeridos' });
  }

  slogin.verifyLogin(user, password)
    .then((result) => {
      switch (result.status) {
        case 'usuario_inexistente':
          return res.status(404).json({ message: 'Usuario inexistente' });

        case 'usuario_bloqueado':
          return res.status(403).json({ message: 'Usuario bloqueado. Contacte al administrador.' });

        case 'usuario_bloqueado_por_intentos':
          return res.status(403).json({ message: 'El usuario ha sido bloqueado por exceder intentos fallidos.' });

        case 'password_incorrecto':
          return res.status(401).json({ message: 'Contraseña incorrecta.' });

        case 'login_exitoso':
          return res.status(200).json({ message: 'Login exitoso', usuario: result.usuario });

        default:
          return res.status(500).json({ message: 'Error desconocido del servidor.' });
      }
    })
    .catch((err) => {
      console.error('Error en login:', err);
      res.status(500).json({ message: 'Error en el servidor' });
    });
};
