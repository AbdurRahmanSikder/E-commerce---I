const User = require("../model/userModel.js")
const bcrypt = require("bcryptjs");
async function userSignup( req,res ) {
    try{
        const {email, password, name} = req.body;

        if(!email){
            throw new Error("Please provide email");
        }

        if(!password){
            throw new Error("Please provide password");
        }

        if(!name){
            throw new Error("Please provide name");
        }
        const salt = await bcrypt.genSaltSync(10);
        const hashPassword = await bcrypt.hashSync(password , salt);

        if(!hashPassword){
            throw new Error("Something is wrong");
        }

        const payload = {
            ...req.body,
            role : "GENERAL",
            password : hashPassword
        }

        const userData = new User(payload);
        const saveUser = await userData.save();
        res.status(201).json({
            data : saveUser,
            success : true,
            error : false,
            message : "User created successfully !"
        })
    }
    catch(err){
        res.status(400).json({
            message : err.message,
            error : true,
            success : false
        })
        return console.log(err);
    }
}

module.exports = userSignup;