import express from "express";
import * as clogin from "../controllers/login.controller.js";
import * as mauth from "../middleware/auth.middleware.js"
const router= express.Router();

router.post('/', clogin.verifyLogin);

export default router;