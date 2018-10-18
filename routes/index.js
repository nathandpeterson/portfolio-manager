const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.post('/login', Controller.login)
//router.get('/validate', authCtrl.verifyToken)

module.exports = router