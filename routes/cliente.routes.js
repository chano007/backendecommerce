import express from "express";
import * as ccliente from "../controllers/cliente.controller.js";
import * as mauth from "../middleware/auth.middleware.js"
const router= express.Router();

/*router.get('/', ccliente.getAll);
router.get('/:id', ccliente.getById);
router.post('/', ccliente.create);
router.put('/:id', ccliente.update);
router.delete('/:id', ccliente.deletes);*/

router.get('/', mauth.authMiddleware (),ccliente.getAll);
router.get('/:id',mauth.authMiddleware (), ccliente.getById);
router.post('/', mauth.authMiddleware(["admin"]), ccliente.create);
router.put('/:id', mauth.authMiddleware(["admin"]), ccliente.update);
router.delete('/:id', mauth.authMiddleware(["admin"]), ccliente.deletes);

export default router;
