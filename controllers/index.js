const AuthController = require('./AuthController')
const AlbumController = require('./AlbumController')
const ImageController = require('./ImageController')
const EmailController = require('./EmailController')
const InformationController = require('./InformationController')

module.exports = {
  login: AuthController.login,
  verifyToken: AuthController.verifyToken,
  updateUser: AuthController.updateUser,
  getAlbums: AlbumController.getAlbums,
  getAlbum: AlbumController.getAlbum,
  createAlbum: AlbumController.createAlbum,
  updateAlbum: AlbumController.updateAlbum,
  destroyAlbum: AlbumController.destroyAlbum,
  getAllImages: ImageController.getAllImages,
  createImage: ImageController.createImage,
  updateImage: ImageController.updateImage,
  destroyImage: ImageController.destroyImage,
  contactOwner: EmailController,
  getInformation: InformationController.getAllInformation,
  updateInformation: InformationController.updateInformation
}