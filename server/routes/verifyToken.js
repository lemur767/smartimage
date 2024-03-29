const jwt = require('jsonwebtoken');

function authToken (req,res,next){
    const token = req.header('auth-token');
    if(!token) return res.status(400).send('Invalid Access');

    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();

    }catch(err){
        res.status(400).send('Invalid Token');
    }
}