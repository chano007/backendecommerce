import { Usuario } from "../models/usuario.model.js";
import * as susuario from "../services/usuario.service.js";
import * as sfile from "../services/file.service.js";

export const getAll = async function(req, res) {
    console.log("------------usuario.controller.getAll------------");
    try {
        const usuario = await susuario.getAll();
        console.log("... después de susuario.getAll()");
        res.json(usuario || []);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registros" });
    }
};

export const getById = async function(req, res) {
    console.log("------------usuario.controller.getById------------");
    console.log("req.params.id:", req.params.id);
    try {
        const usuario = await susuario.getById(req.params.id);
        console.log("... después de susuario.getById()");
        res.json(usuario || {});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registro" });
    }
};

export const create = async function(req, res) {
    const objtUsuario=req.body;
    console.log(objtUsuario);
    try{
        let idUsuario= await susuario.create(objtUsuario, req.user.id_usuario);
        console.log("... despues de susuario.create()");
        res.json( {"idUsuario":idUsuario} );
    }catch(error){
        res.status(500).json({"error":"Error ingresando registros"});
    };
};

export const update = async function(req, res) {
    console.log("------------usuario.controller.update------------");
    const objtUsuario = req.body;
    console.log(objtUsuario);
    try {
        const numRegistros = await susuario.update(req.params.id, objtUsuario);
        console.log("... después de susuario.update()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error actualizando registro" });
    }
};

export const deletes = async function(req, res) {
    console.log("------------usuario.controller.deletes------------");
    console.log("req.params.id:", req.params.id);
    try {
        const numRegistros = await susuario.deletes(req.params.id);
        console.log("... después de susuario.deletes()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error eliminando registro" });
    }
};

export const upload = async function(req, res) {
    console.log("------------controller------------");
    const objtUsuario=req.body;
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
        let rutaArchivo= await susuario.downloadArchivo(req.params.id);
        console.log("... despues de susuario.downloadArchivo()");
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