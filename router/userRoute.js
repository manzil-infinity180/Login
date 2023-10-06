const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router
      .route('/')
      .get(userController.getAll);

      router.post('/forgotPassword',userController.forgotPassword);
      router.post('/login',userController.login);
      router.post('/signup',userController.signup);
      router.patch('/resetPassword/:token',userController.resetPassword);
      router.post('/registration',userController.registration);


module.exports = router;