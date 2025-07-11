import * as modelMarca from "../models/marca.model.js";

export const getAll = async function() {
    console.log("------------Marca.service.getAll------------");
    const results = await modelMarca.getAll();
    return results;
};

export const getById = async function(idMarca) {
    console.log("------------marca.service.getById------------");
    const result = await modelMarca.getById(idMarca);
    return result;
};

export const create = async function(nombre_marca) {
    const idMarca = await modelMarca.create(nombre_marca);
    return idMarca;
};

export const update = async function(idMarca, objtMarca) {
    const results = await modelMarca.update(idMarca, objtMarca);
    return results;
};

export const deletes = async function(idMarca) {
    const results = await modelMarca.deletes(idMarca);
    return results;
};

export const downloadArchivo = async function(idMarca) {
    console.log("------------service------------");
    const results= await modelMarca.getById(idMarca);
    console.log("luego del modelMarca: "+results[0].archivo);
    return archivos.getArchivo(results[0].archivo);
};