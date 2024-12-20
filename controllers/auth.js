// use to create all the authentication controllers 
const { User } = require("../models");

const signup = async (req, res, next) =>{
    try{
        // Extract data from the request body
        const { name, email, password, role } = req.body;

        // check if email already exist
        const isEmailExist = await User.findOne({email});
        if(isEmailExist) {
            res.code = 400; // 400 -> its a bad request from the client side
            throw new Error("Email already exist");
        };

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