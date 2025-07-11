import * as scliente from "../services/cliente.service.js";

export const getAll = async function(req, res) {
    console.log("------------cliente.controller.getAll------------");
    try {
        const clientes = await scliente.getAll();
        console.log("... después de scliente.getAll()");
        res.json(clientes || []);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registros" });
    }
};

export const getById = async function(req, res) {
    console.log("------------cliente.controller.getById------------");
    console.log("req.params.id:", req.params.id);
    try {
        const cliente = await scliente.getById(req.params.id);
        console.log("... después de scliente.getById()");
        res.json(cliente || {});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registro" });
    }
};

export const createx = async function(req, res) {
    console.log("------------cliente.controller.create------------");
    const objCliente = req.body;
    console.log(objCliente);
    try {
        const idCliente = await scliente.create(objCliente);
        console.log("... después de scliente.create()");
        res.json({ idCliente });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error creando registro" });
    }
};

export const create = async function(req, res) {
    const objCliente=req.body;
    console.log(objCliente);
    try{
        let idCliente= await scliente.create(objCliente, req.user.id_cliente);
        console.log("... despues de scliente.create()");
        res.json( {"idCliente":idCliente} );
    }catch(error){
        res.status(500).json({"error":"Error ingresando registros"});
    };
};

export const update = async function(req, res) {
    console.log("------------cliente.controller.update------------");
    const objCliente = req.body;
    console.log(objCliente);
    try {
        const numRegistros = await scliente.update(req.params.id, objCliente);
        console.log("... después de scliente.update()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error actualizando registro" });
    }
};

export const deletes = async function(req, res) {
    console.log("------------cliente.controller.deletes------------");
    console.log("req.params.id:", req.params.id);
    try {
        const numRegistros = await scliente.deletes(req.params.id);
        console.log("... después de scliente.deletes()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error eliminando registro" });
    }
};
