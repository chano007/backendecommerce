import * as modelEstado from "../models/estado.model.js";

export const getAll = async function() {
    console.log("------------estado.service.getAll------------");
    const results = await modelEstado.getAll();
    return results;
};

export const getById = async function(idEstado) {
    console.log("------------Estado.service.getById------------");
    const result = await modelEstado.getById(idEstado);
    return result;
};

export const create = async function(descripcion) {
    const idEstado = await modelEstado.create(descripcion);
    return idEstado;
};

export const update = async function(idEstado, objEstado) {
    const results = await modelEstado.update(idEstado, objEstado);
    return results;
};

export const deletes = async function(idEstado) {
    const results = await modelEstado.deletes(idEstado);
    return results;
};