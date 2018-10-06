const UserModel = require('../models/UserModel')
const ImageModel = require('../models/ImageModel')
const AlbumModel = require('../models/AlbumModel')

const resolvers = {
  Query: {
    users : () => UserModel.getAll(),
    user: (params, {id}) => UserModel.getOne(id),
    
    albums: (params, {id}) => AlbumModel.getOne(id),
    album: () => AlbumModel.getAll(),

    image: () => ImageModel.getAll(),
    images: (params, {id}) => ImageModel.getOne(id)
  
  },
}


module.exports = resolvers