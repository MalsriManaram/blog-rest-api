const express = require("express"); 
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const connectMongoDb = require("./init/mongodb");
const {authRoute} = require("./routes");
const morgan = require("morgan");
const {errorHandler} = require("./middlewares");
const notFound = require("./controllers/notfound"); 

// init app
const app = express();

// connect to database
connectMongoDb();

// third party middleware
app.use(express.json({limit: "500mb"}));
app.use(bodyParser.urlencoded({limit: "500mb", extended: true}));
app.use(morgan("dev")); // use to log (show) requests to the console


// route section 
app.use("/api/v1/auth", authRoute);

// not found route
app.use("*", notFound);

// error handler middleware
app.use(errorHandler);

module.exports = app;