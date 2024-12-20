//use to create all the validators for the authentication routes
const {check} = require("express-validator");


const signupValidator = [
    check("name").notEmpty().withMessage("Name is required."),
    check("email").isEmail().withMessage("Invalid Email.").notEmpty().withMessage("Email is required."), 
    check("password").isLength({min: 8}).withMessage("Password must be at least 8 characters long.").notEmpty().withMessage("Password is required."),
];

module.exports = {signupValidator};