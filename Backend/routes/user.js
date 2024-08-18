
const express = require('express');
const router = express.Router();

const{login,signup,logout} = require('../controller/Auth');
const {authorization,isVisitor,isAdmin} = require('../middlewear/Authorization');
const{allData} = require('../controller/allData')
router.post('/login',login);
router.post('/signup',signup);
router.post('/logout',logout);
router.get('/alldata',allData)


module.exports = router;