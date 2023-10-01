const express = require("express");
const viewController = require("../controller/viewController");
const router = express.Router();
router.get('/login',viewController.getLoginForm);
module.exports=router;

