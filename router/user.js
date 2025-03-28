const express = require('express')
const UserModel=require('../model/user.js')
const {validatorRegister, validatorCode, validatorLogin}= require("../validators/user.js")
const {registerCtrl, validationCtrl, loginCtrl}= require("../controllers/users.js")
const userRouter = express.Router();

userRouter.post("/register", validatorRegister, registerCtrl);
userRouter.post("/validation/:token", validatorCode, validationCtrl);
userRouter.post("/login", validatorLogin, loginCtrl);

module.exports= userRouter;