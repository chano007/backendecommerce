import * as modelProducto from "../models/producto.model.js";
import * as archivo from "../utils/archivos.js";

export const getAll = async function() {
    console.log("------------producto.service.getAll------------");
    const results = await modelProducto.getAll();
    return results;
};

export const getById = async function(idProducto) {
    console.log("------------producto.service.getById------------");
    const result = await modelProducto.getById(idProducto);
    return result;
};

export const create = async function(id_marca,nombre_producto, precio_producto, descripcion_producto, stock_producto) {
    const idProducto = await modelProducto.create(id_marca,nombre_producto, precio_producto, descripcion_producto, stock_producto);
    return idProducto;
};

export const update = async function(idProducto, objtProducto) {
    const results = await modelProducto.update(idProducto, objtProducto);
    return results;
};

export const deletes = async function(idProducto) {
    const results = await modelProducto.deletes(idProducto);
    return results;
};

export const downloadArchivos = async function(ID_PRODUCTO) {
    console.log("------------service------------");
    const results= await modelProducto.getById(ID_PRODUCTO);
    console.log("luego del modelProducto: "+results[0].archivo);
    return archivo.getArchivos(results[0].archivo);
};