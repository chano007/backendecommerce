import express from "express";
import rusuario from "./routes/usuario.routes.js"
import rlogin from "./routes/login.routes.js"
import restado from "./routes/estado.routes.js"
import rcliente from "./routes/cliente.routes.js"
import rmarca from "./routes/marca.routes.js"
import rproducto from "./routes/producto.routes.js"
import rpedido from "./routes/pedido.routes.js"
import rseguridad from "./routes/seguridad.routes.js"
import rfile from "./routes/file.routes.js";

const router= express.Router();

//... secciones ...
router.use('/usuario', rusuario);
router.use('/login', rlogin);
router.use('/estado', restado);
router.use('/cliente', rcliente);
router.use('/marca', rmarca);
router.use('/producto', rproducto);
router.use('/pedido', rpedido);
router.use('/seguridad', rseguridad);
router.use('/archivos', rfile);

console.log("Cargando rutas...");

export default router;
