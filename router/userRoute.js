const express = require("express");
const userController = require("../controller/userController");
const router = express.Router();

router
      .route('/')
      .get(userController.getAll);

      router.post('/login',userController.login);
router.post('/signup',userController.signup);


module.exports = router;