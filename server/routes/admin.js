const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const adminLayout = '../views/layouts/admin';


const authMiddleWare = async (req, res, next) => {
  const cookie = req.cookies.token;

  if(!cookie){
    return res.status(401).json({message: 'Unauthorized'});
  }

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.userId = decoded.userId; 
  }
  catch(error){
    return res.status(401).json({message: 'Unauthorized'});
}
};

router.get('/admin', async (req, res) => {
  try {
    const locals = {
        title: "Admin",
        description: "Simple Blog created with NodeJs, Express & MongoDb."
      }

    const data = await Post.find();
    res.render('admin/index', {locals, layout:adminLayout});
  } catch (error) {
    console.log(error);
  }

});





router.post('/admin', async (req, res) => {
    try {
      
    const {username, password}= req.body;
    const user = await User.findOne({username});

    if(!user){
      return res.status(401).json({message: 'Invalid Username or Password'});
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if(!isPasswordValid){
      return res.status(401).json({message: 'Invalid Username or Password'});
    }

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET);
    res.cookie('token', token, {httpOnly: true});
    // res.status(200).json({message: 'Login Successful'});
    res.redirect('/dashboard');


    } catch (error) {
      console.log(error);
    }
  
  });


router.get('/dashboard', authMiddleWare, async (req, res) => {

  res.render('admin/dashboard');

});


router.post('/register', async(req, res) => {
  try {
    const {username, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    try {
      
      const user = await User.create({username, password: hashPassword});
      res.status(201).json({message: 'User created', user});


    } catch (error) {
      if(error.code === 11000){
        return res.status(409).json({message: 'Username already exists'});
      }
      res.status(500).json({message: 'Server Error'});
      
    }



  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
