import * as modelUsuario from "../models/usuario.model.js";

export const getAll = async function() {
    console.log("------------Usuario.service.getAll------------");
    const results = await modelUsuario.getAll();
    return results;
};

export const getById = async function(idUsuario) {
    console.log("------------Usuario.service.getById------------");
    const result = await modelUsuario.getById(idUsuario);
    return result;
};

export const create = async function(user,password, correo_usuario, nro_intentos, otp, rol) {
    const idUsuario = await modelUsuario.create(user, password, correo_usuario, nro_intentos, otp, rol);
    return idUsuario;
};

export const update = async function(idUsuario, objtUsuario) {
    const results = await modelUsuario.update(idUsuario, objtUsuario);
    return results;
};

export const deletes = async function(idUsuario) {
    const results = await modelUsuario.deletes(idUsuario);
    return results;
};

export const downloadArchivo = async function(idUsuario) {
    console.log("------------service------------");
    const results= await modelUsuario.getById(idUsuario);
    console.log("luego del modelUsuario: "+results[0].archivo);
    return archivos.getArchivo(results[0].archivo);
};