const express = require('express')
const UserModel=require('../model/user.js')
const {validatorRegister, validatorCode, validatorLogin, validatorPersonalData,validatorCompanyData}= require("../validators/user.js")
const {registerCtrl, validationCtrl, loginCtrl, PersonalDataCtrl, CompanyDataCtrl}= require("../controllers/users.js")
const userRouter = express.Router();

userRouter.post("/register", validatorRegister, registerCtrl);
userRouter.post("/validation/:token", validatorCode, validationCtrl);
userRouter.post("/login", validatorLogin, loginCtrl);
userRouter.put("/personalData/:token", validatorPersonalData, PersonalDataCtrl);
userRouter.patch("/compantData/:token", validatorCompanyData, CompanyDataCtrl);

module.exports= userRouter;