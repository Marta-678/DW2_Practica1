const express = require('express')
const UserModel=require('../model/user.js')
const {validatorRegister}= require("../validators/user.js")
const {registerCtrl}= require("../controllers/users.js")
const userRouter = express.Router();

userRouter.post("/register", validatorRegister, registerCtrl);

module.exports= userRouter;