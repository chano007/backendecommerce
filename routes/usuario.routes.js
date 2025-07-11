import express from "express";
import * as cusuario from "../controllers/usuario.controller.js";
import * as mauth from "../middleware/auth.middleware.js"
const router= express.Router();

/*router.get('/', cusuario.getAll);
router.get('/:id', cusuario.getById);
router.post('/', cusuario.create);
router.put('/:id', cusuario.update);
router.delete('/:id', cusuario.deletes);*/

router.get('/', mauth.authMiddleware (),cusuario.getAll);
router.get('/:id',mauth.authMiddleware (), cusuario.getById);
router.post('/', mauth.authMiddleware(["admin"]), cusuario.create);
router.put('/:id', mauth.authMiddleware(["admin"]), cusuario.update);
router.delete('/:id', mauth.authMiddleware(["admin"]), cusuario.deletes);

export default router;