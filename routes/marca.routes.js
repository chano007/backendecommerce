import express from "express";
import * as cmarca from "../controllers/marca.controller.js";
import * as mauth from "../middleware/auth.middleware.js"

const router= express.Router();

/*router.get('/', cmarca.getAll);
router.get('/:id', cmarca.getById);
router.post('/', cmarca.create);
router.put('/:id', cmarca.update);
router.delete('/:id', cmarca.deletes);*/

router.get('/', mauth.authMiddleware (),cmarca.getAll);
router.get('/:id',mauth.authMiddleware (), cmarca.getById);
router.post('/', mauth.authMiddleware(["admin"]), cmarca.create);
router.put('/:id', mauth.authMiddleware(["admin"]), cmarca.update);
router.delete('/:id', mauth.authMiddleware(["admin"]), cmarca.deletes);
router.post('/upload', mauth.authMiddleware(), cmarca.upload);

export default router;