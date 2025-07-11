import pool from "../config/db.js";

export const verifyLogin = (user, password) => {
    return new Promise((resolve, reject) => {
        // 1. Buscar usuario por nombre de usuario
        pool.query(
            'SELECT * FROM tb_usuario WHERE USER = ?',
            [user],
            (err, results) => {
                if (err) {
                    return reject(err);
                }

                if (results.length === 0) {
                    // Usuario no encontrado
                    return resolve({ status: 'usuario_inexistente' });
                }

                const usuario = results[0];

                // 2. Validar si el usuario está bloqueado (ESTADO = false)
                if (!usuario.ESTADO) {
                    return resolve({ status: 'usuario_bloqueado' });
                }

                // 3. Validar contraseña
                if (usuario.PASSWORD === password) {
                    // Login exitoso
                    return resolve({ status: 'login_exitoso', usuario });
                } else {
                    // Contraseña incorrecta
                    const nuevosIntentos = (usuario.NRO_INTENTOS || 0) + 1;

                    if (nuevosIntentos > 3) {
                        // 4. Bloquear usuario si supera 3 intentos
                        pool.query(
                            'UPDATE tb_usuario SET NRO_INTENTOS = ?, ESTADO = false WHERE USER = ?',
                            [nuevosIntentos, user],
                            (updateErr) => {
                                if (updateErr) {
                                    return reject(updateErr);
                                }
                                return resolve({ status: 'usuario_bloqueado_por_intentos' });
                            }
                        );
                    } else {
                        // 5. Solo actualizar número de intentos
                        pool.query(
                            'UPDATE tb_usuario SET NRO_INTENTOS = ? WHERE USER = ?',
                            [nuevosIntentos, user],
                            (updateErr) => {
                                if (updateErr) {
                                    return reject(updateErr);
                                }
                                return resolve({ status: 'password_incorrecto' });
                            }
                        );
                    }
                }
            }
        );
    });
};
