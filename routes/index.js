const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.post('/login', Controller.login)
router.post('/updateUser', Controller.verifyToken, Controller.updateUser)
router.get('/albums', Controller.getAlbums)
router.get('/albums/:id', Controller.getAlbum)
router.get('/images', Controller.getAllImages)
router.post('/images', Controller.createImage)
router.post('/images/:id', Controller.updateImage)


module.exports = router