const jwt = require("jsonwebtoken");

async function authToken(req, res, next) {
    try{
        const token = req.cookies?.token;
        
        console.log("token ", token);
        
        if(!token){
            return res.json({
                message : "User not login",
                error : true,
                success : false
            })
            next();
        }


        jwt.verify(token , process.env.TOKEN_SECRET_KEY, function (err, decode) {
            console.log(err);
            console.log("decode : ", decode);
            req.user.id = decode._id;
        })
    }
    catch(err){
        res.status(400).json({
            message : err.message || err,
            data : [],
            error : true,
            success : false
        })
    }    
}

module.exports = authToken;