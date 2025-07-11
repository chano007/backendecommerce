import express from "express";
import * as cpedido from "../controllers/pedido.controller.js";
import * as mauth from "../middleware/auth.middleware.js"
const router = express.Router();

/*router.get('/', cpedido.getAll);
router.get('/:id', cpedido.getById);
router.post('/', cpedido.create);
router.delete('/:id', cpedido.deletes);*/

router.get('/', mauth.authMiddleware (),cpedido.getAll);
router.get('/:id',mauth.authMiddleware (), cpedido.getById);
router.post('/', mauth.authMiddleware(["admin"]), cpedido.create);
router.delete('/:id', mauth.authMiddleware(["admin"]), cpedido.deletes);

export default router;