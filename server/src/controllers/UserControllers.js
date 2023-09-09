const UserService = require('../services/UserServices')

const RegisterUser = async (req, res) => {
    try {
        console.log(req.body);
        const resAw = await UserService.RegisterUser();
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
module.exports = { RegisterUser };