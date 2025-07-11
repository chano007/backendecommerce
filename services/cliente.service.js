import * as modelCliente from "../models/cliente.model.js";

export const getAll = async function() {
    console.log("------------cliente.service.getAll------------");
    const results = await modelCliente.getAll();
    return results;
};

export const getById = async function(idCliente) {
    console.log("------------cliente.service.getById------------");
    const result = await modelCliente.getById(idCliente);
    return result;
};

export const create = async function(nombre, apellidos, dni, direccion, ubigeo) {
    const idCliente = await modelCliente.create(nombre, apellidos, dni, direccion, ubigeo);
    return idCliente;
};

export const update = async function(idCliente, objCliente) {
    const results = await modelCliente.update(idCliente, objCliente);
    return results;
};

export const deletes = async function(idCliente) {
    const results = await modelCliente.deletes(idCliente);
    return results;
};