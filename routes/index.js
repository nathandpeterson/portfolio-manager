const express = require('express')
const router = express.Router()
const Controller = require('../controllers')

router.post('/login', Controller.login)
router.post('/updateUser', Controller.verifyToken, Controller.updateUser)
router.get('/albums', Controller.getAlbums)
router.get('/albums/:id', Controller.getAlbum)
router.post('/albums', Controller.verifyToken, Controller.createAlbum)
router.post('/albums/:id', Controller.verifyToken, Controller.updateAlbum)
router.delete('/albums/:id', Controller.verifyToken, Controller.destroyAlbum)
router.get('/images', Controller.getAllImages)
router.post('/images', Controller.verifyToken, Controller.createImage)
router.post('/images/:id', Controller.verifyToken, Controller.updateImage)
router.delete('/images/:id', Controller.verifyToken, Controller.destroyImage)
router.post('/albumImages', Controller.verifyToken, Controller.updateImages)
router.post('/contact', Controller.contactOwner)
router.get('/information', Controller.getInformation)
router.post('/information', Controller.verifyToken, Controller.updateInformation)


module.exports = router