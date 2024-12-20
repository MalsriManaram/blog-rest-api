const { stack } = require("../app");

// use to add all the error handlers
const errorHandler = (error, res, req, next) => {
    const code = res.code ? res.code : 500;

    res.status(code).json({ code, status: false, message: error.message, stack: error.stack});
};

module.exports = errorHandler;
