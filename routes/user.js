'use strict';

//****************************************************
// Require 
//****************************************************

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//****************************************************
// Load Product Model 
//****************************************************

require('../models/Product');
const Product = mongoose.model('products');

//****************************************************
// User Login
//****************************************************

router.get('/login', (req, res) => {
  res.render('login');
});


//****************************************************
// User Resgistera
//****************************************************

router.get('/register', (req, res) => {
  res.send('register');
});

//****************************************************
// User Index Default
//****************************************************

router.get('/', (req, res) => {
  Product.find({})
    .sort({
      purchaseDate: 'desc'
    })
    .then(products => {
      res.render('user', {
        products: products
      });
    });
});

module.exports = router;