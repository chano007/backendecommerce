import pool from "../config/db.js"

export const login = function(objUsuario) {
    console.log("------------service------------");
    return new Promise( (resolve, reject) => {
        pool.query(
            'select u.id_usuario, u.user, u.correo_usuario, u.password, u.rol from tb_usuario u '+
            'where u.correo_usuario=? and u.estado=true', [objUsuario.correo_usuario], (err, results, fields) =>{
                console.log(results);
                if (err) reject(err);
                else resolve(results);
            });
    });
};

export const findById = function(id_usuario) {
    console.log("------------service------------");
    return new Promise( (resolve, reject) => {
        pool.query(
            'select u.id_usuario, u.user, u.correo_usuario, u.password, u.rol from tb_usuario u '+
            'where u.id_usuario=? and u.estado=true', [id_usuario], (err, results, fields) =>{
                console.log(results);
                if (err) reject(err);
                else resolve(results);
            });
    });
};
