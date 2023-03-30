const express = require('express');
const router = require('express').Router();
const User = require('./mongodb/models/User');
const jwt = require('jsonwebtoken');
const { registerValidation } = require('../validation');
const bcrypt = require('bcryptjs');
const { register, login, resetpassword, forgotpassword } = require('../controllers/auth.js');

// Register //

router.route('/register').post(register);

router.route('/login').post(login);

router.route('/resetpassword/:resetToken').post(resetpassword);

router.route('/forgotpassword').post(forgotpassword);

module.exports = router;


    //Vaildation check and alrady exits check//



   


// Login //
 
router.post('/login'), async (req, res) => {

    const { error } = loginValidation(req.body);
        if(error) return res.status(400).send(error.details[0].message);
        
            const user = await User.findOne({email: req.body.email});
            if (!user) return res.status(400).send('Email or password are wrong');   

            const validPass = await bcrypt.compare(req.body.password, user.password);
            if(!validPass) return res.status(400).send('Invalid Passord')

    const token = jwt.sign({_id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
    
    res.send('Logged in');

};






module.exports = router;

