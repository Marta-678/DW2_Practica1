const express = require('express')
const UserModel=require('../model/user.js')
const {validatorRegister, validatorCode}= require("../validators/user.js")
const {registerCtrl, validationCtrl}= require("../controllers/users.js")
const userRouter = express.Router();

userRouter.post("/register", validatorRegister, registerCtrl);
userRouter.post("/validation/:token", validatorCode, validationCtrl);

module.exports= userRouter;