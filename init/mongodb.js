const mongoose = require("mongoose");
const {connectionUrl} = require("../config/keys");

const connectMongoDb = async () => {
    try{

        await mongoose.connect(connectionUrl);
        console.log("Database Connection Successful.");

    }catch(error){
        console.log("Database Connection Not Successful. ", error.message);
    }
};

module.exports = connectMongoDb;
