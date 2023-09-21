const UserService = require('../services/UserServices');
const JwtService = require('../services/jwtServices')

const RegisterUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword, phone } = req.body;

        const regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = regEmail.test(email);
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "nhap cac truong con trong!"
                });
        } else if (!isCheckEmail) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "email khong hop le"
                });
        } else if (password !== confirmPassword) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "mat khau khong trung khop"
                });
        };

        const resAw = await UserService.RegisterUser(req.body);

        return res
            .status(200)
            .json(resAw);

    } catch (error) {
        return res
            .status(404)
            .json({
                message: error
            })
    }
}
const LoginUser = async (req, res) => {
    try {
        const { email, password, confirmPassword} = req.body;

        const regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        const isCheckEmail = regEmail.test(email);
        if (!email || !password || !confirmPassword) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "nhap cac truong con trong!"
                });
        } else if (!isCheckEmail) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "email khong hop le"
                });
        } else if (password !== confirmPassword) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "mat khau khong trung khop"
                });
        };

        const resAw = await UserService.LoginUser(req.body);

        return res
            .status(200)
            .json(resAw);

    } catch (error) {
        return res
            .status(400)
            .json({
                message: error
            })
    }
}

const UpdateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body
        const resAw = await UserService.UpdateUser(userId, data);

        if (!userId) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "UserId is required"
                });
        }
        return res
            .status(200)
            .json(resAw);

    } catch (error) {
        return res
            .status(400)
            .json({
                message: error
            })
    }
}
const DeleteUser = async (req, res) => {
    try {
        const userId = req.params.id;
        // const token = req.headers;
        // console.log('token ',token)

        const resAw = await UserService.DeleteUser(userId);

        if (!userId) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "UserId is required"
                });
        }
        return res
            .status(200)
            .json(resAw);

    } catch (error) {
        return res
            .status(404)
            .json({
                message: error
            })
    }
}

const GetAllUser = async (req, res) => {
    try {

        const resAw = await UserService.GetAllUser();

        return res
            .status(200)
            .json(resAw);

    } catch (error) {
        return res
            .status(404)
            .json({
                message: error
            })
    }
}
const GetDetailUser = async (req, res) => {
    try {
        const userId = req.params.id;

        const resAw = await UserService.GetDetailUser(userId);

        if (!userId) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "UserId is required"
                });
        }
        return res
            .status(200)
            .json(resAw);

    } catch (error) {
        return res
            .status(404)
            .json({
                message: error
            })
    }
}

const RefreshToken = async (req, res) => {
    try {
        let token = req.headers.token.split(' ')[1];
        if (!token) {
            return res
                .status(200)
                .json({
                    status: "error",
                    message: "token is required!!!"
                })
        }
        const resAw = await JwtService.RefreshTokenJwtService(token)
        return res
            .status(200)
            .json(resAw)

    } catch (error) {
        return res
            .status(404)
            .json({ message: error })
    }
}

module.exports = {
    RegisterUser,
    LoginUser,
    UpdateUser,
    DeleteUser,
    GetAllUser,
    GetDetailUser, 
    RefreshToken
};