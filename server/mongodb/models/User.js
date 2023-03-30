const mongoose = require('mongoose');
const 

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 6,
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
    min: 8,
    select: false
  },
  date: {
    type: Date,
    default: Date.now,
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date
});

UserSchema.pre('save', async function(){
  if(!this.isModified('password'))
    next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
    next();

  const { error } = registerValidation(req.body);
    if(error) return res.status(400).send(error.details[0].message);
     next(); 
  const emailExists = await User.findOne({email: req.body.email});
    if (emailExists) return res.status(400).send('Email already Exists');
    next();
);
const User = mongoose.model('User', UserSchema);

module.exports = User;


