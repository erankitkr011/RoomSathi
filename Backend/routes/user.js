
const express = require('express');
const router = express.Router();

const{login,signup,logout} = require('../controller/Auth');
//const {authorization,isVisitor,isAdmin} = require('../middlewear/Authorization');
const{allData,addHome,ownerData} = require('../controller/allData')
const {Delete} = require('../controller/Delete')

router.post('/login',login);
router.post('/signup',signup);
router.post('/logout',logout);
router.get('/alldata',allData)
router.post('/add-home',addHome);
router.get('/ownerdata/:ownerId',ownerData);
router.delete('/delete/:deleteId',Delete);



module.exports = router;