import { Producto } from "../models/producto.model.js";
import * as sproducto from "../services/producto.service.js";
import * as sfile from "../services/file.service.js";

//... variables del servicio ...


export const getAll = async function(req, res) {
    console.log("------------producto.controller.getAll------------");
    try {
        const producto = await sproducto.getAll();
        console.log("... después de sproducto.getAll()");
        res.json(producto || []);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registros" });
    }
};

export const getById = async function(req, res) {
    console.log("------------producto.controller.getById------------");
    console.log("req.params.id:", req.params.id);
    try {
        const producto = await sproducto.getById(req.params.id);
        console.log("... después de sproducto.getById()");
        res.json(producto || {});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error obteniendo registro" });
    }
};

export const create = async function(req, res) {
    const objtProducto=req.body;
    console.log(objtProducto);
    try{
        let idProducto= await sproducto.create(objtProducto, req.user.id_producto);
        console.log("... despues de sproducto.create()");
        res.json( {"idProducto":idProducto} );
    }catch(error){
        res.status(500).json({"error":"Error ingresando registros"});
    };
};

export const update = async function(req, res) {
    console.log("------------producto.controller.update------------");
    const objtProducto = req.body;
    console.log(objtProducto);
    try {
        const numRegistros = await sproducto.update(req.params.id, objtProducto);
        console.log("... después de sproducto.update()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error actualizando registro" });
    }
};

export const deletes = async function(req, res) {
    console.log("------------producto.controller.deletes------------");
    console.log("req.params.id:", req.params.id);
    try {
        const numRegistros = await sproducto.deletes(req.params.id);
        console.log("... después de sproductos.deletes()");
        res.json({ numRegistros });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error eliminando registro" });
    }
};

//subida de archivos
export const upload = async function (req, res) {
    console.log("------------controller------------");
    const objProducto = req.body;
    try{
        sfile.upload(req, res);
        console.log("response luego de upload");
    } catch (error) {
        res.status(500).json({
            "error": "Error actualizando registros"
        });
    }
}

//descarga de archivos

export const download = async function(req, res) {
    console.log("------------controller------------");
    console.log("req.params.id: "+req.params.id);
    try{
        let rutaArchivo= await sproducto.downloadArchivos(req.params.id);
        console.log("... despues de sproducto.downloadArchivos()");
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