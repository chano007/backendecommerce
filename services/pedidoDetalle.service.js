import pool from "../config/db.js";

// Obtener todos los pedidos con sus detalles
export const getAll = () => {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT p.*, d.ID_DETALLE_PEDIDO, d.ID_PRODUCTO, d.CANTIDAD, d.PRECIO_U, d.PRECIO_TOT
             FROM tb_pedidos p
             LEFT JOIN tb_detalle_pedido d ON p.ID_PEDIDO = d.ID_PEDIDO`,
            (err, results) => {
                if (err) return reject(err);

                const pedidos = {};
                results.forEach(row => {
                    if (!pedidos[row.ID_PEDIDO]) {
                        pedidos[row.ID_PEDIDO] = {
                            id_pedido: row.ID_PEDIDO,
                            id_cliente: row.ID_CLIENTE,
                            fecharegistro: row.FECHAREGISTRO,
                            id_estado: row.ID_ESTADO,
                            direccion: row.DIRECCION,
                            ubigeo: row.UBIGEO,
                            monto_total: row.MONTO_TOTAL,
                            id_usuario: row.ID_USUARIO,
                            DETALLES: []
                        };
                    }
                    if (row.ID_DETALLE_PEDIDO) {
                        pedidos[row.ID_PEDIDO].DETALLES.push({
                            id_detalle_pedido: row.ID_DETALLE_PEDIDO,
                            id_producto: row.ID_PRODUCTO,
                            cantidad: row.CANTIDAD,
                            precio_u: row.PRECIO_U,
                            precio_tot: row.PRECIO_TOT
                        });
                    }
                });

                resolve(Object.values(pedidos));
            }
        );
    });
};

// Obtener un pedido por ID
export const getById = (id_pedido) => {
    return new Promise((resolve, reject) => {
        pool.query(
            `SELECT p.*, d.ID_DETALLE_PEDIDO, d.ID_PRODUCTO, d.CANTIDAD, d.PRECIO_U, d.PRECIO_TOT
             FROM tb_pedidos p
             LEFT JOIN tb_detalle_pedido d ON p.ID_PEDIDO = d.ID_PEDIDO
             WHERE p.ID_PEDIDO = ?`,
            [id_pedido],
            (err, results) => {
                if (err) return reject(err);
                if (results.length === 0) return resolve(null);

                const pedido = {
                    id_pedido: results[0].ID_PEDIDO,
                    id_cliente: results[0].ID_CLIENTE,
                    fecharegistro: results[0].FECHAREGISTRO,
                    id_estado: results[0].ID_ESTADO,
                    direccion: results[0].DIRECCION,
                    ubigeo: results[0].UBIGEO,
                    monto_total: results[0].MONTO_TOTAL,
                    id_usuario: results[0].ID_USUARIO,
                    DETALLES: []
                };

                results.forEach(row => {
                    if (row.ID_DETALLE_PEDIDO) {
                        pedido.DETALLES.push({
                            id_detalle_pedido: row.ID_DETALLE_PEDIDO,
                            id_producto: row.ID_PRODUCTO,
                            cantidad: row.CANTIDAD,
                            precio_u: row.PRECIO_U,
                            precio_tot: row.PRECIO_TOT
                        });
                    }
                });

                resolve(pedido);
            }
        );
    });
};

// Crear pedido y detalles (sin transacción)
export const create = (pedido) => {
    return new Promise((resolve, reject) => {
        const pedidoQuery = `INSERT INTO tb_pedidos 
            (ID_CLIENTE, FECHAREGISTRO, ID_ESTADO, DIRECCION, UBIGEO, MONTO_TOTAL, ID_USUARIO) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`;

        pool.query(pedidoQuery, [
            pedido.ID_CLIENTE,
            pedido.FECHAREGISTRO,
            pedido.ID_ESTADO,
            pedido.DIRECCION,
            pedido.UBIGEO,
            pedido.MONTO_TOTAL,
            pedido.ID_USUARIO
        ], (err, result) => {
            if (err) return reject(err);

            const idPedido = result.insertId;
            const detalles = pedido.DETALLES || [];

            if (detalles.length === 0) {
                return resolve(idPedido);
            }

            const detalleQuery = `INSERT INTO tb_detalle_pedido 
                (ID_PEDIDO, ID_PRODUCTO, CANTIDAD, PRECIO_U, PRECIO_TOT) 
                VALUES ?`;

            const detalleValues = detalles.map(detalle => [
                idPedido,
                detalle.ID_PRODUCTO,
                detalle.CANTIDAD,
                detalle.PRECIO_U,
                detalle.PRECIO_TOT
            ]);

            pool.query(detalleQuery, [detalleValues], (err2) => {
                if (err2) return reject(err2);
                resolve(idPedido);
            });
        });
    });
};

// Eliminar pedido y detalles (sin transacción)
export const deletes = (id_pedido) => {
    return new Promise((resolve, reject) => {
        pool.query('DELETE FROM tb_detalle_pedido WHERE ID_PEDIDO = ?', [id_pedido], (err) => {
            if (err) return reject(err);

            pool.query('DELETE FROM tb_pedidos WHERE ID_PEDIDO = ?', [id_pedido], (err2, result) => {
                if (err2) return reject(err2);
                resolve(result.affectedRows);
            });
        });
    });
};
