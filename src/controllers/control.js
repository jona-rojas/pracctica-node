import {pool} from '../database/cone1.js'

export const getAllWorkouts = async (req, res) => {
    const [rows] = await pool.query('Select * From datospersonales ')
    res.json(rows)
};
export const getOneWorkout = async (req, res) => {

        const [rows] = await pool.query('Select * From datospersonales where id_datopersonal=?', [req.params.id])
        if (rows.length <= 0) return res.status(400).json({
            message: 'Dato no exitente'
        })
        res.json(rows[0])
    
};

/*export const createWorkout = async (req, res) => {
    try {
        const { puesto, profesion, curp, nombre, appaterno, apmaterno, estado, delegacion, localidad, colonia, calle, numexterior, numinterior, codigopostal, fechanacimiento, entidadnacimiento, rfc, sexo, cartanaturalizacion, telefonocasa, telefonocelular, otrotelefono, correoelectronico, etapaseleccion, eliminado, fechainicio, fechafinal, proceso, fechainicioproceso, correo, eliminamult, acceder, confirmarasistencia } = req.body;
        const [rows] = await pool.query("INSERT INTO datospersonales (puesto, profesion, curp, nombre, appaterno, apmaterno, estado, delegacion, localidad, colonia, calle, numexterior, numinterior, codigopostal, fechanacimiento, entidadnacimiento, rfc, sexo, cartanaturalizacion, telefonocasa, telefonocelular, otrotelefono, correoelectronico, etapaseleccion, eliminado, fechainicio, fechafinal, proceso, fechainicioproceso, correo, eliminamult, acceder, confirmarasistencia) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", [puesto, profesion, curp, nombre, appaterno, apmaterno, estado, delegacion, localidad, colonia, calle, numexterior, numinterior, codigopostal, fechanacimiento, entidadnacimiento, rfc, sexo, cartanaturalizacion, telefonocasa, telefonocelular, otrotelefono, correoelectronico, etapaseleccion, eliminado, fechainicio, fechafinal, proceso, fechainicioproceso, correo, eliminamult, acceder, confirmarasistencia]);
        res.status(201).json({ id_datopersonal: rows.insertId, puesto, profesion, curp, nombre, appaterno, apmaterno, estado, delegacion, localidad, colonia, calle, numexterior, numinterior, codigopostal, fechanacimiento, entidadnacimiento, rfc, sexo, cartanaturalizacion, telefonocasa, telefonocelular, otrotelefono, correoelectronico, etapaseleccion, eliminado, fechainicio, fechafinal, proceso, fechainicioproceso, correo, eliminamult, acceder, confirmarasistencia });
    } catch (error) {
        return res.status(500).json({ message: "Something goes wrong" });
    }
};

export const deleteOneWorkout = async (req, res) => {

    try {
        const [result] = await pool.query('DELETE FROM datospersonales WHERE id_datopersonal=? ', [req.params.id])
        if (result.affectedRows <= 0) return res.status(404).json({
            message: 'Dato eliminado'
        })
        res.sendStatus(204)
    } catch (error) {
        return res.status(400).json({
            message: 'Dato no exitente'
        })
    }

};
export const updateOneWorkout = async (req, res) => {
    try {
        const { id } = req.params;
        const { puesto, profesion, curp, nombre, appaterno, apmaterno, estado, delegacion, localidad, colonia, calle, numexterior, numinterior, codigopostal, fechanacimiento, entidadnacimiento, rfc, sexo, cartanaturalizacion, telefonocasa, telefonocelular, otrotelefono, correoelectronico, etapaseleccion, eliminado, fechainicio, fechafinal, proceso, fechainicioproceso, correo, eliminamult, acceder, confirmarasistencia } = req.body;

        const [result] = await pool.query("UPDATE datospersonales SET puesto=ifnull(?,puesto), profesion=ifnull(?,profesion), curp=ifnull(?,curp), nombre=ifnull(?,nombre), appaterno=ifnull(?,appaterno),apmaterno=ifnull(?,apmaterno), estado=ifnull(?,estado), delegacion=ifnull(?,delegacion), localidad=ifnull(?,localidad), colonia=ifnull(?,colonia), calle=ifnull(?,calle), numexterior=ifnull(?,numexterior), numinterior=ifnull(?,numinterior), codigopostal=ifnull(?,codigopostal), fechanacimiento=ifnull(?,fechanacimiento), entidadnacimiento=ifnull(?,entidadnacimiento), rfc=ifnull(?,rfc), sexo=ifnull(?,sexo), cartanaturalizacion=ifnull(?,cartanaturalizacion), telefonocasa=ifnull(?,telefonocasa), telefonocelular=ifnull(?,telefonocelular), otrotelefono=ifnull(?,otrotelefono), correoelectronico=ifnull(?,correoelectronico), etapaseleccion=ifnull(?,etapaseleccion), eliminado=ifnull(?,eliminado), fechainicio=ifnull(?,fechainicio), fechafinal=ifnull(?,fechafinal), proceso=ifnull(?,proceso), fechainicioproceso=ifnull(?,fechainicioproceso), correo=ifnull(?,correo), eliminamult=ifnull(?,eliminamult), acceder=ifnull(?,acceder), confirmarasistencia=ifnull(?,confirmarasistencia) WHERE id_datopersonal = ?",
            [puesto, profesion, curp, nombre, appaterno, apmaterno, estado, delegacion, localidad, colonia, calle, numexterior, numinterior, codigopostal, fechanacimiento, entidadnacimiento, rfc, sexo, cartanaturalizacion, telefonocasa, telefonocelular, otrotelefono, correoelectronico, etapaseleccion, eliminado, fechainicio, fechafinal, proceso, fechainicioproceso, correo, eliminamult, acceder, confirmarasistencia, id]
        );
        if (result.affectedRows === 0)
            return res.status(404).json({ message: "datospersonales not found" });
        const [rows] = await pool.query("SELECT * FROM datospersonales WHERE id_datopersonal = ?", [
            id,
        ]);
        res.json(rows[0])
    } catch {
        return res.status(500).json({ message: "ERROR" });
    }
};*/



