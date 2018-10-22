const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.post('/login', Controller.login)
router.post('/updateUser', Controller.verifyToken, Controller.updateUser)
router.get('/albums', Controller.getAlbums)
router.get('/albums/:id', Controller.getAlbum)
router.post('/albums', Controller.createAlbum)
router.post('/albums/:id', Controller.updateAlbum)
router.delete('/albums/:id', Controller.destroyAlbum)
router.get('/images', Controller.getAllImages)
router.post('/images', Controller.createImage)
router.post('/images/:id', Controller.updateImage)
router.delete('/images/:id', Controller.destroyImage)
router.post('/contact', Controller.contactOwner)


module.exports = router