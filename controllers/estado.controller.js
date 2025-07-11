import * as sestado from "../services/estado.service.js";

export const getAll = async function(req, res) {
    console.log("------------estado.controller.getAll------------");
    try {
        const estado = await sestado.getAll();
        console.log("... después de scliente.getAll()");
        res.json(estado || []);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registros" });
    }
};

export const getById = async function(req, res) {
    console.log("------------estado.controller.getById------------");
    console.log("req.params.id:", req.params.id);
    try {
        const estado = await sestado.getById(req.params.id);
        console.log("... después de sestado.getById()");
        res.json(estado || {});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registro" });
    }
};

export const create = async function(req, res) {
    const objEstado=req.body;
    console.log(objEstado);
    try{
        let idEstado= await sestado.create(objEstado, req.user.id_estado);
        console.log("... despues de sestado.create()");
        res.json( {"idEstado":idEstado} );
    }catch(error){
        res.status(500).json({"error":"Error ingresando registros"});
    };
};

export const update = async function(req, res) {
    console.log("------------estado.controller.update------------");
    const objEstado = req.body;
    console.log(objEstado);
    try {
        const numRegistros = await sestado.update(req.params.id, objEstado);
        console.log("... después de sestado.update()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error actualizando registro" });
    }
};

export const deletes = async function(req, res) {
    console.log("------------estado.controller.deletes------------");
    console.log("req.params.id:", req.params.id);
    try {
        const numRegistros = await sestado.deletes(req.params.id);
        console.log("... después de sestado.deletes()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error eliminando registro" });
    }
};
