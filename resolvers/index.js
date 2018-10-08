const UserModel = require('../models/UserModel')
const ImageModel = require('../models/ImageModel')
const AlbumModel = require('../models/AlbumModel')

const resolvers = {
  Query: {
    users : () => UserModel.getAll(),
    user: (params, {id}) => UserModel.getOne(id),
    
    albums: () => AlbumModel.getAll(),
    album: (params, {id}) =>  AlbumModel.getOne(id),

    image: (params, {id}) => ImageModel.getOne(id),
    images: () => ImageModel.getAll()
  
  },
  Mutation : {
    createUser: (params, {userData}) => {
      return UserModel.create(userData)
        .then(res => {
          console.log(res)
          return res
        })
    },
    updateUser: (params, input) => UserModel.updateUser(input)
  }
}


module.exports = resolvers