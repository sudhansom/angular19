const users = [{
  id: 'u1',
  name: 'Sudhan',
  email: 'bkspoudel@gmail.com',
  password: 'password123'
}]


const createUser = (req, res, next) => {
  res.send({message:'Create user'})
}

const getAllUsers = (req, res, next) => {
  res.json({users});
}

exports.createUser = createUser;
exports.getAllUsers = getAllUsers;
