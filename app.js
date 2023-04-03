const express = require('express');
const app =express();
const mongoose = require('mongoose');
require('dotenv/config');

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//Routes
app.get('/',(req,res)=>{
    res.send('We are on home')
});

app.get('/posts',(req,res)=>{
    res.send('We are on posts')
});


//connect to DB
mongoose.connect(process.env.DB_CONNECTION,
                 { useNewUrlParser:true},
                 ()=>console.log('connected to DB!'));

app.listen(9000);