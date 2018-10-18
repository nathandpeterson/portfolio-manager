const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.post('/login', Controller.login)
router.post('/updateUser', Controller.verifyToken, Controller.updateUser)
//router.get('/validate', authCtrl.verifyToken)

module.exports = router