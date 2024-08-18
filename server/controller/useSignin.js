const User = require('../model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const userSingin = async (req, res) => {
    try{
        const { email, password } = req.body;
        if(!email)
        {
            throw new Error("Provide email");
        }
        if(!password)
        {
            throw new Error("Provide password");
        }
        const profile = await User.findOne({email});

        if(!profile)
        {
            throw new Error("User not found");
        }

        const checkPassword = bcrypt.compareSync(password , profile.password);

        if(checkPassword)
        {
            const tokenData = {
                _id : profile._id,
                email : profile.email
            }

            const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY,{expiresIn : 3600})

            const tokenOption = {
                httpOnly : true,
                secure : true
            }

            res.cookie("token", token, tokenOption).json({
                message : "Login successfully",
                data : token,
                success : true
            })    
        }
    }
    catch(err){
        console.log(err);
        res.json({
            message : err.message,
            error : true,
            success : false
        })
    }
 }


 module.exports = userSingin;