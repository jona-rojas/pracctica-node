import bcryotjs from "bcryptjs";
import { pool } from "../database/coneccion.js"
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const consulta = await pool.query('Select * From logeado');
export const datos = consulta[0]

export async function login(req, res) {
  console.log(req.body);
  const email = req.body.email;
  const pass = req.body.password;
  if (!email || !pass) {
    return res.status(400).send({ staus: "Campos vacios" })
  }
  const usuarioexiste = datos.find(datos => datos.email === email);
  if (!usuarioexiste) {
    console.log(usuarioexiste)
    return res.status(400).json({ message: 'Error login' })
  }
  const correcto = await bcryotjs.compare(pass, usuarioexiste.passwor)
  console.log(correcto)
  if (!correcto) {
    return res.status(400).json({ message: 'Error login' })
  }

  const token = jsonwebtoken.sign({ email: usuarioexiste.email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPITATE });
  const coki = {
    expires: new Date(Date.now() + process.env.JWT_EXPIRATION * 24 * 60 * 60 * 1000),
    path: "/"
  }
  res.cookie("jwt", token, coki);
  return res.status(200).json({ message: 'Usuario creado', redirect: "/admin" })
}

export async function registro(req, res) {
  console.log(req.body);
  const email = req.body.email;
  const pass = req.body.password;
  const nombre = req.body.Nombre;

  if (!email || !pass || !nombre) {
    return res.status(400).send({ staus: "Campos vacios" })
  }
  const usuarioAResvisar = datos.find(datos => datos.email === email);
  if (usuarioAResvisar) {
    console.log(usuarioAResvisar)
    return res.status(400).send({ status: "Error", message: "Este usuario ya existe" })
  }
  const salt = await bcryotjs.genSalt(5);
  const haspass = await bcryotjs.hash(pass, salt);
  const nuevo = {
    nombre, email, passwor: haspass
  }
  const [rows] = await pool.query('Insert into logeado set?', [nuevo], (err, rows) => {
    console.log(rows);
  })
  console.log(rows);
  return res.status(200).json({ message: 'Usuario creado', redirect: "/" })

}
