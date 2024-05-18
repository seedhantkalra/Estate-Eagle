const errorHandler = (err, req, res, next) => {
    console.error(err.stack);

    const statusCode = err.statusCode || 500;
    const errMessage = err.message || 'Something went wrong';

    res.status(statusCode).json({
        error: {
            message: errMessage
        },
    });
};

module.exports = errorHandler;