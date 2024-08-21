

async function userDetailsController( req, res) {
    try {


        console.log(req.body);
        res.status(200).json({
            success : true
        })

    }
    catch (err) {
        res.status(400).json({
            message : err.message || err,
            error : true,
            success : false
        })
    }
}

module.exports = userDetailsController;