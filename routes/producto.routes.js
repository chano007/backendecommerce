import express from "express";
import * as cproducto from "../controllers/producto.controller.js";
import * as mauth from "../middleware/auth.middleware.js"

const router= express.Router();

/*router.get('/', cproducto.getAll);
router.get('/:id', cproducto.getById);
router.post('/', cproducto.create);
router.put('/:id', cproducto.update);
router.delete('/:id', cproducto.deletes);*/

router.get('/', mauth.authMiddleware (),cproducto.getAll);
router.get('/:id',mauth.authMiddleware (), cproducto.getById);
router.post('/', mauth.authMiddleware(["admin"]), cproducto.create);
router.put('/:id', mauth.authMiddleware(["admin"]), cproducto.update);
router.delete('/:id', mauth.authMiddleware(["admin"]), cproducto.deletes);

//nuevos cambios
router.post('/upload', cproducto.upload);
router.get('/download/:id', cproducto.download);

export default router;
