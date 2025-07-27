const User = require('../models/user');


const createUser = async (req, res, next) => {

  let {name, age} = req.body;
  const user = new User({
    name,
    age
  })
  try{
    await user.save();
  }catch(err){
    return next(err);
  }
  res.json({user: user.toObject({getters: true})});
}

const getAllUsers = (req, res, next) => {
  res.json({message:'users'});
}

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
