const User = require("../models/UserModel");
const bcrypt = require('bcrypt');
const { genneralAccessToken, genneralRefreshToken } = require("./jwtServices");

const RegisterUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, phone } = newUser;
        try {
            const checkUser_email = await User.findOne({ email: email });
            if (checkUser_email !== null) {
                resolve({
                    status: "error",
                    message: "email da ton tai"
                });
            }
            const hashPassword = bcrypt.hashSync(password, 14);

            const createdUser = await User.create({
                name, email, password: hashPassword, phone
            });
            if (createdUser) {
                resolve({
                    status: "oke",
                    message: "tao tai khoan thanh cong",
                    data: createdUser
                });
            }
            resolve({ a: "A" })

        } catch (error) {
            reject(error)
        }
    })
};

const LoginUser = (userLogin) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, phone } = userLogin;
        try {
            const checkUser_email = await User.findOne({ email: email });
            if (checkUser_email === null) {
                resolve({
                    status: "error",
                    message: "user khong ton tai"
                });
            }
            const comparePassword = bcrypt.compareSync(password, checkUser_email.password);
            if (!comparePassword) {
                resolve({
                    status: 200,
                    message: "sai mat khau"
                })
            }
            const access_token = await genneralAccessToken({
                id: checkUser_email._id,
                isAdmin: checkUser_email.isAdmin
            });

            const refresh_token = await genneralRefreshToken({
                id: checkUser_email._id,
                isAdmin: checkUser_email.isAdmin
            })


            resolve({
                status: "oke",
                message: "login oke",
                access_token: access_token,
                refresh_token: refresh_token
            });

            // resolve({ a: "A" })

        } catch (error) {
            reject(error)
        }
    })
};
const UpdateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser_id = await User.findOne({ _id: id });
            console.log(checkUser_id)
            if (checkUser_id === null) {
                resolve({
                    status: "error",
                    message: "user khong ton tai"
                });
            }
            const updateUser = await User.findByIdAndUpdate(id, data, { new: true })

            resolve({
                status: "oke",
                message: "update oke",
                data: updateUser
            });

            // resolve({ a: "A" })

        } catch (error) {
            reject(error)
        }
    })
};
const DeleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkUser_id = await User.findOne({ _id: id });
            if (checkUser_id === null) {
                resolve({
                    status: "error",
                    message: "user khong ton tai"
                });
            }
            await User.findByIdAndDelete(id);

            resolve({
                status: "oke",
                message: "delete oke",
            });

        } catch (error) {
            reject(error)
        }
    })
};

const GetAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allUser = await User.find();

            resolve({
                status: "oke",
                message: "get all user oke",
                data: allUser
            });

        } catch (error) {
            reject(error)
        }
    })
};
const GetDetailUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const userDetail_id = await User.findOne({ _id: id });
            if (userDetail_id === null) {
                resolve({
                    status: "error",
                    message: "user khong ton tai"
                });
            }

            resolve({
                status: "oke",
                message: "get user detail oke",
                data: userDetail_id
            });

        } catch (error) {
            reject(error)
        }
    })
};
module.exports = {
    RegisterUser,
    LoginUser,
    UpdateUser,
    DeleteUser,
    GetAllUser,
    GetDetailUser
}