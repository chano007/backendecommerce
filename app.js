import _express from "express";
import _bodyParser from "body-parser";
import _cors from "./config/cors.js";

import PUERTO from "./utils/constantes.js";
import api from "./routes.js"

const app= _express();
app.use(_bodyParser.json());
app.use(_cors);

//... endpoints ...
app.use("/api/v1", api);

//listar archivos en la web
app.use(_express.static('uploads'));

//... servidor ...
app.listen(PUERTO, () => {
    console.log('Listening on '+PUERTO);
});
