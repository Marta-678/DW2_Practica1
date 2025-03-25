const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");
const validatorRegister=[
    check("email").exists().notEmpty().isEmail(),
    check("password").exists().notEmpty().isLength({ min: 8, max: 16 }),
    (req, res, next) => validateResults(req, res, next)
];

module.exports = {validatorRegister}