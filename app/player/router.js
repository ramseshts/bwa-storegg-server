var express = require('express');
var router = express.Router();
const multer = require('multer')
const os = require('os')

const { 
    landingPage, 
    detailPage, 
    category, 
    checkOut, 
    history, 
    historyDetail, 
    dashboard, 
    profile,
    editProfile 
} = require('./controller')

const { isLoginPlayer } = require('../middleware/auth')

router.get('/landingPage', landingPage);
router.get('/:id/detail', detailPage);
router.get('/category', category);
router.post('/checkout', isLoginPlayer, checkOut);
router.get('/history', isLoginPlayer, history);
router.get('/history/:id/detail', isLoginPlayer, historyDetail);
router.get('/dashboard', isLoginPlayer, dashboard);
router.get('/profile', isLoginPlayer, profile);
router.put('/profile', isLoginPlayer, multer({dest: os.tmpdir()}).single('image'), editProfile);

module.exports = router;