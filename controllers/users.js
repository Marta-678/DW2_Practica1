const UserModel=require('../model/user.js')
const { matchedData } = require("express-validator");
const { encrypt, compare } = require("../utils/handlePassword");
const { usersModel }= require("../model/user.js")

const registerCtrl = async (req, res) => {
    try{
        // filtrar los datos para info no válida
        req=matchedData(req);
        // cifrear contraseña
        const pass= await encrypt(req.password);
        const user = await usersModel.create({ ...req, pass });
        user.set("password", undefined, { strict: false });
        
    }catch (error){

    }
}


module.exports={registerCtrl}