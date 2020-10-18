const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const User = require('../models/contact');
const port = process.env.PORT || 3000;
const app = express();

const public = path.join(__dirname,'../public');
const views = path.join(__dirname,'../templates/views');

const url ='mongodb://localhost:27017/jaydeepKart';
const connect = mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology: true })
.then(()=>{ console.log('connected to database..');});


app.set('view engine','pug');
app.set('views',views);
app.use(express.static(public));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.urlencoded({extended:false}));

app.get('/',(req,res)=>{
    res.render('index.pug');
});

app.get('/contact',(req,res)=>{
   res.render('contact.pug');
});

app.post('/contact',(req,res,next)=>{
  const {name,email,number}=req.body;
  if(!name|| !email || !number){
    setTimeout(()=>{
      res.redirect('/contact');
    },700)
     
  }
  else{
  let newUser = new User(req.body)
  newUser.save().then(()=>{
    res.statusCode=200;
    res.setHeader('Content-Type','application/json');
    setTimeout(()=>{
      res.redirect('/contact');
    },700)
  
},(err)=>next(err)).catch((err)=>next(err));
  }
})

app.get('*',(req,res)=>{
 res.send(" not found 404 error")
});

app.listen(port,()=>{
  console.log(`your server is running on http://localhost:${port}`);
});