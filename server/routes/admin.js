const express = require('express');
const router = express.Router();
const Post = require('../models/Post.js')
const User = require('../models/User.js')


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


module.exports = router;
