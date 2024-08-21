const express = require("express");
const userSignup = require('../controller/useSignup');
const userSignin = require('../controller/useSignin');
const userDetailsController = require("../controller/user.Details");
const authToken = require("../middleware/authToken");


const router = express.Router();


router.post('/signup', userSignup);
router.post('/signin', userSignin);
router.get('/user-details',authToken,userDetailsController);
module.exports = router;