import * as spedido from "../services/pedidoDetalle.service.js";

// Obtener todos los pedidos
export const getAll = function(req, res) {
    console.log("------------controller getAll------------");
    spedido.getAll()
    .then(pedidos => {
        console.log("... después de spedido.getAll()");
        res.json(pedidos || []);
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ "error": "Error obteniendo registros" });
    });
};

// Obtener pedido por ID
export const getById = function(req, res) {
    console.log("------------controller getById------------");
    const id = req.params.id;
    spedido.getById(id)
    .then(pedido => {
        console.log("... después de spedido.getById()");
        res.json(pedido || {});
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ "error": "Error obteniendo registro" });
    });
};

// Crear pedido con detalles
export const create = function(req, res) {
    console.log("------------controller create------------");
    const objPedido = req.body;
    console.log(objPedido);
    spedido.create(objPedido)
    .then(idPedido => {
        console.log("... después de spedido.create()");
        res.json({ "idPedido": idPedido });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ "error": "Error ingresando registro" });
    });
};

// Eliminar pedido y detalles
export const deletes = function(req, res) {
    console.log("------------controller deletes------------");
    const id = req.params.id;
    spedido.deletes(id)
    .then(numRegistros => {
        console.log("... después de spedido.deletes()");
        res.json({ "numRegistros": numRegistros });
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({ "error": "Error eliminando registro" });
    });
};
