const express = require("express");
const mongoose = require("mongoose");
const userRoute = require('./routes/user')

const app = express();

app.use('/api/users/', userRoute);




mongoose.connect('mongodb+srv://practice:practice@cluster0.3wccq.mongodb.net/practice').then(()=>{
  app.listen(3001, (req, res, next)=>{
    console.log('app running ....')
   })
}).catch(err => { console.log('Error::', err)})
