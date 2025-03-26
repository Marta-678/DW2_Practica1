const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const  usersModel = require("../model/user.js")
const { handleHttpError , handleEmailExistError } = require("../utils/handleError");
const { tokenSign } = require("../utils/handleJwt.js");

const registerCtrl = async (req, res) => {
    try{
        // filtrar los datos para info no válida
        req=matchedData(req);
        console.log("Datos recibidos:", req);
        const existingUser = await usersModel.findOne({ email: req.email });
        if(existingUser){
            console.log("El email ya está registrado.");
            return handleEmailExistError(res,"EMAIL YA REGISTRADO");
        }
        const verificationCode = Math.floor(100000 + Math.random() * 900000);
        // cifrear contraseña
        const password= await encrypt(req.password);
        console.log("Contraseña cifrada:", password);

        const user = await usersModel.create({ ...req, password, verificationCode, verificationAttempts: 3 });
        console.log("Usuario creado en la base de datos:", user);

        user.set("password", undefined, { strict: false });
        res.send({ token: await tokenSign(user), user });
        
    }catch (error){
        console.error("Error en registerCtrl:", error);
        handleHttpError(res, "ERROR_REGISTER_USER");
    }
}


module.exports={registerCtrl}