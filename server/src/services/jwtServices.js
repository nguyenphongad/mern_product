const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config();

const genneralAccessToken = async (payload) => {
    const access_token = jwt.sign({
        ...payload
    }, process.env.ACCESS_TOKEN, { expiresIn: '3000s' });
    return access_token;
}
const genneralRefreshToken = async (payload) => {
    const refresh_token = jwt.sign({
        ...payload
    }, process.env.REFRESH_TOKEN, { expiresIn: '365d' });
    return refresh_token;
}

const RefreshTokenJwtService = (token) => {
    return new Promise((resolve, reject) => {
        try {
            jwt.verify(token, process.env.REFRESH_TOKEN, async (err, user) => {
                if (err) {
                    console.log(err)
                    resolve({
                        status: "err",
                        message: "the authencation"
                    })
                }
                const access_token = await genneralAccessToken({
                    id: user?.id,
                    isAdmin: user?.isAdmin
                });
                resolve({
                    status: "oke",
                    message: "token oke",
                    access_token
                })
            })
        } catch (error) {
            reject(error)
        }
    })
}

module.exports = {
    genneralAccessToken,
    genneralRefreshToken,
    RefreshTokenJwtService
}