// use to create all the authentication controllers 
const { User } = require("../models");

const signup = async (req, res, next) =>{
    try{
        // Extract data from the request body
        const { name, email, password, role } = req.body;
        if (!name){
            res.code = 400;
            throw new Error("Name is required");
        };
        if (!email){
            res.code = 400;
            throw new Error("Email is required");
        };
        if (!password){
            res.code = 400;
            throw new Error("Password is required");
        }
        if(password.length < 8){
            res.code = 400;
            throw new Error("Password must be at least 8 characters long");
        }

        // Create a new user instance
        const newUser = new User({ name, email, password, role });
        // Save the new user to the database
        await newUser.save();

        res.status(201).json({ code: 201, status: true,  message: "User registered successfully" });
        // status: 201 -> created.
    }catch(error){
        next(error);
    };
};

module.exports = {signup}; 