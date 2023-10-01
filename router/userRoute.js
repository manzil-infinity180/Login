const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router
      .route('/')
      .get(userController.getAll);

router.post('/signup',userController.signup);
router.post('/login',userController.login);


module.exports = router;