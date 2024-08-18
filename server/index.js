const express = require("express");
const cors = require("cors");
require('dotenv').config();
const connectDB = require('./config/config');
const router = require('./routes');
const app = express();
const cookieParser = require('cookie-parser');
const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin : process.env.FRONTED_URL,
    credentials : true
}));
app.use("/api", router);

const PORT = 8000;

connectDB().then( () => {
    app.listen(PORT , () => {
        console.log("app listening on port 8000"); 
    })
})

