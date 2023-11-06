const express = require('express')
const router = express.Router()

const { isLoggedIn } = require('./../middleware/route-guard')

router.get('/main', isLoggedIn, (req, res, next) => {
    res.render('user/main')
})

router.get('/private', isLoggedIn, (req, res, next) => {
    res.render('user/private')
})

module.exports = router