const express = require("express");
const userRoute = require('./routes/user')

const app = express();

app.use('/api/users/', userRoute);


app.listen(3001, (req, res, next)=>{
 console.log('app running ....')
})
