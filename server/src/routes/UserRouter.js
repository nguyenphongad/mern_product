const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserControllers');
const { authMiddleware, authUserMiddleWare } = require('../middleware/AuthMiddleware');

router.post('/register', UserController.RegisterUser);
router.post('/login', UserController.LoginUser);
router.put('/update-user/:id', UserController.UpdateUser);
router.delete('/delete-user/:id', authMiddleware, UserController.DeleteUser);
router.get('/getAll', authMiddleware, UserController.GetAllUser);
router.get('/getDetailUser/:id', authUserMiddleWare, UserController.GetDetailUser);
router.post('/refresh-token', UserController.RefreshToken);

module.exports = router