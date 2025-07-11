import express from "express";
import * as cestado from "../controllers/estado.controller.js";
import * as mauth from "../middleware/auth.middleware.js"
const router= express.Router();

/*router.get('/', cestado.getAll);
router.get('/:id', cestado.getById);
router.post('/', cestado.create);
router.put('/:id', cestado.update);
router.delete('/:id', cestado.deletes);*/

router.get('/', mauth.authMiddleware (),cestado.getAll);
router.get('/:id',mauth.authMiddleware (), cestado.getById);
router.post('/', mauth.authMiddleware(["admin"]), cestado.create);
router.put('/:id', mauth.authMiddleware(["admin"]), cestado.update);
router.delete('/:id', mauth.authMiddleware(["admin"]), cestado.deletes);

export default router;