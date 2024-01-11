import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
import {datos} from "../controllers/ahut.js";

dotenv.config();

export function soloAdmin(req,res,next){
  const logueado = revisarCookie(req);
  if(logueado) return next();
  return res.redirect("/")
}

export function soloPublico(req,res,next){
  const logueado = revisarCookie(req);
  if(!logueado) return next();
  return res.redirect("/admin")
}

function revisarCookie(req){
  try{
    const cookieJWT = req.headers.cookie.split("; ").find(cookie => cookie.startsWith("jwt=")).slice(4);
    const decodificada = jsonwebtoken.verify(cookieJWT,process.env.JWT_SECRET);
    console.log(decodificada)
    const usuarioexiste = datos.find(datos => datos.email === decodificada.email)
    console.log(usuarioexiste)
    if (!usuarioexiste) {
      return false;
    }
    return true;
  }
  catch{
    return false;
  }
}
