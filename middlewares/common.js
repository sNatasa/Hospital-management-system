logger = (req, res, next) => {
    console.log(`Logged ${req.url} - ${req.method} --- ${new Date()}`);
    next();
};

wrongRoute = (req, res, next) => {
    let error = new Error("This route does not exists. Please try with another route");
    error.status = 404;
    next(error);
};

errorHandler = (error, req, res, next) => {
    let errObj = {
        status: error.status,
        error: {
            message: "Forbidden"
        }
    }
    res.status(error.status).json(errObj);
};

module.exports = {
    wrongRoute, 
    errorHandler,
    logger
}