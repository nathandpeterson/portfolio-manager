const typeDefs = `
  type Query {
    users: [User!],
    user(id: ID!): User!,
    albums: [Album!],
    album(id: ID!): Album!,
    images: [Image!],
    image(id: ID!): Image!
  }
  type User {
    id: ID!,
    first_name: String!,
    last_name: String,
    albums: [Album],
  }

  type Album {
    id: ID!,
    album_name: String!,
    album_description: String,
    images: [Image]
  }
  type Image {
    id: ID!,
    name: String,
    description: String,
    size: String,
    date: String
}

input UserData {
  id: ID,
  first_name: String,
  last_name: String
}

type Mutation {
  createUser(userData : UserData): User
  updateUser(userData: UserData): User
}
`
  module.exports = typeDefs