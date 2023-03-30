const User = require('../models/User.js');


exports.register = async (req, res, next) => {
    const {name, email, password} = req.body;
    try{
        const user = await User.create({
            name, email, password
        });
        res.status(201).json({
            success: true,
            user
        })
    }catch(error){
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;

    if(!email || !password) {
        res.status(400).json ({
            success: false,
            error: "Please provide your Email"
        });
    try{
        const user = await User.findOne({ email }).select("+password")    }
    }
};

exports.forgotpassword = (req, res, next) => {
    res.send("forgot Route");
};

exports.resetpassword = (req, res, next) => {
    res.send("reset Route");
};