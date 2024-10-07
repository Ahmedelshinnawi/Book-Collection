const express = require('express');
const router = express.Router();
const Post = require('../models/Post')
const User = require('../models/User')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const adminLayout = '../views/layouts/admin';


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
    console.log(req.body);
    res.redirect('/admin');


    } catch (error) {
      console.log(error);
    }
  
  });


router.post('/register', async(req, res) => {
  try {
    const {username, password} = req.body;
    const hashPassword = await bcrypt.hash(password, 10);

    try {
      
      const user = await User.create(username, password)


    } catch (error) {
      
    }



  } catch (error) {
    console.log(error);
  }

});

module.exports = router;
