const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");
const validatorCorreo=[
    check("email").exists().notEmpty().isEmail()
];
