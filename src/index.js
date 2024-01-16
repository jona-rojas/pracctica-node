import express from "express";
import Cookiparser from "cookie-parser";
import path from 'path';
import cors from 'cors';//se intala para usar los cors 
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
import ruta from './v1/routes/1ruta.js';
import { login, registro } from './controllers/ahut.js';
import { soloAdmin, soloPublico } from './middlewares/autorisacion.js';
import {PORT} from './config.js';

//Servidor
const app = express();
app.listen(PORT)
console.log('Puerto enlase', PORT)


//confirm
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(Cookiparser());
app.use(cors());//para instansiarlas en todas la vistas 
app.use("/admin/app/api", soloAdmin, ruta)

//direccion

app.get("/", soloPublico, (req, res) => res.sendFile(__dirname + "/pages/login.html"))
app.get("/registro", soloPublico, (req, res) => res.sendFile(__dirname + "/pages/registro.html"))
app.get("/admin", soloAdmin, (req, res) => res.sendFile(__dirname + "/pages/att/admin.html"))
app.post("/api/logeo", login)
app.post("/api/registro", registro)

