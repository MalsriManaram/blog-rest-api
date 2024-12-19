const express = require("express"); 
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const connectMongoDb = require("./init/mongodb");
const {authRoute} = require("./routes")


// init app
const app = express();

// connect to database
connectMongoDb();

// third party middleware
app.use(express.json({limit: "500mb"}));
app.use(bodyParser.urlencoded({limit: "500mb", extended: true}));

// route section 
app.use("/api/v1/auth", authRoute);

module.exports = app;