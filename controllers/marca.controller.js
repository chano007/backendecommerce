import { Marca } from "../models/marca.model.js";
import * as smarca from "../services/marca.service.js";
import * as sfile from "../services/file.service.js";

export const getAll = async function(req, res) {
    console.log("------------marca.controller.getAll------------");
    try {
        const marca = await smarca.getAll();
        console.log("... después de smarca.getAll()");
        res.json(marca || []);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registros" });
    }
};

export const getById = async function(req, res) {
    console.log("------------marca.controller.getById------------");
    console.log("req.params.id:", req.params.id);
    try {
        const marca = await smarca.getById(req.params.id);
        console.log("... después de smarca.getById()");
        res.json(marca || {});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registro" });
    }
};

export const create = async function(req, res) {
    const objtMarca=req.body;
    console.log(objtMarca);
    try{
        let idMarca= await smarca.create(objtMarca, req.user.id_marca);
        console.log("... despues de smarca.create()");
        res.json( {"idMarca":idMarca} );
    }catch(error){
        res.status(500).json({"error":"Error ingresando registros"});
    };
};

export const update = async function(req, res) {
    console.log("------------marca.controller.update------------");
    const objtMarca = req.body;
    console.log(objtMarca);
    try {
        const numRegistros = await smarca.update(req.params.id, objtMarca);
        console.log("... después de smarca.update()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error actualizando registro" });
    }
};

export const deletes = async function(req, res) {
    console.log("------------marca.controller.deletes------------");
    console.log("req.params.id:", req.params.id);
    try {
        const numRegistros = await smarca.deletes(req.params.id);
        console.log("... después de smarca.deletes()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error eliminando registro" });
    }
};

export const upload = async function(req, res) {
    console.log("------------controller------------");
    const objtMarca=req.body;
    try{
        sfile.upload(req, res);
        console.log("response luego de upload");
    }catch(error){
        res.status(500).json({"error":"Error actualizando registros"});
    };
};

export const download = async function(req, res) {
    console.log("------------controller------------");
    console.log("req.params.id: "+req.params.id);
    try{
        let rutaArchivo= await scatalogo.downloadArchivo(req.params.id);
        console.log("... despues de smarca.downloadArchivo()");
        if (fs.existsSync(rutaArchivo)) {
            // Configurar headers
            res.download(rutaArchivo, 'imagen.jpg', (err) => {
                if (err) {
                    console.error('Error al descargar:', err);
                    res.status(500).send({"error":'Error al descargar el archivo'});
                }
            });
        } else {
            res.status(404).send({"error":'Archivo no encontrado'});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({"error":"Error obteniendo registros"});
    };
};