const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();

const authMiddleware = (req, res, next) => {
    const token = req.headers.token.split(' ')[1];

    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res
                .status(404)
                .json({
                    status: "err",
                    message: "err the auth !!!"
                })
        }
        const { payload } = user;
        if (payload?.isAdmin) {
            next()
        } else {
            return res
                .status(404)
                .json({
                    status: "err",
                    message: "the auth !!!"
                })
        }
    })
}
const authUserMiddleWare = (req, res, next) => {
    const token = req.headers.token.split(' ')[1];
    const userId = req.params.id
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        if (err) {
            return res.status(404).json({
                status: 'ERROR',
                message: 'The authentication'
            })
        }
        if (user?.isAdmin || user?.id === userId) {
            next()
        } else {
            return res.status(404).json({
                status: 'err',
                message: 'The authentication'
            })
        }
    });
}
module.exports = { authMiddleware, authUserMiddleWare }