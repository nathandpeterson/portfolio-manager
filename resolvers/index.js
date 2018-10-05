const UserModel = require('../models/UserModel')
// const ImageModel = require('../models/ImageModel')
// const AlbumModel = require('../models/AlbumModel')

const resolvers = {
  Query: {
    users : () => UserModel.getAll(),
    user: (params, args) => {
      console.log('args', args)
      console.log('params', params)
      UserModel.getOne(args)
    }
  }
}


module.exports = resolvers