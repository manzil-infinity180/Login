const express = require("express");
// const multer = require("multer");
const userController = require("../controller/userController");
const router = express.Router();

// const upload = multer({dest: 'public/img'});
router
      .route('/')
      .get(userController.getAll);
      router.post('/forgotPassword',userController.forgotPassword);
      router.post('/login',userController.login);
      router.post('/signup',userController.signup);
      router.patch('/resetPassword/:token',userController.resetPassword);
      router.post('/registration',userController.registration);
      router.patch('/updateMe',userController.uploadUserPhoto,userController.updateMe);


module.exports = router;