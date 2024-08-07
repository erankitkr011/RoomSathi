
const express = require('express');
const router = express.Router();

const{login,signup} = require('../controller/Auth');
const {authorization,isVisitor,isAdmin} = require('../middlewear/Authorization');

router.post('/login',login);
router.post('/signup',signup);



module.exports = router;