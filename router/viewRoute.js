const express = require("express");
const viewController = require("../controller/viewController");
const router = express.Router();
router.get('/',viewController.getOverView);
router.get('/login',viewController.getLoginForm);
router.get('/signup',viewController.createAccount);
router.get('/forgotPassword',viewController.forgotPassword);
router.get('/updateMyPassword',viewController.updateMyPassword);
router.get('/registration',viewController.registration);
module.exports=router;

