const express = require("express");
const userSignup = require('../controller/useSignup');
const userSignin = require('../controller/useSignin');


const router = express.Router();


router.post('/signup', userSignup);
router.post('/signin', userSignin);

module.exports = router;