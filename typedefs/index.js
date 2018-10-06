const tempDefs = `
type Query {
  items: [Item!]!
}
type Item {
  name: String!
}
`

const moreSchema =  `type Album
id: ID!,
album_name: String!,
album_description: String,
images: [Image],
user: User
type Image {
      id: ID!,
      name: String,
      description: String,
      size: String,
      date: String,
      album: Album,
      user: User
}
`

const typeDefs = `
  type Query {
    users: [User!],
    user(id: ID!): User!
  }
  type User {
    id: ID!,
    first_name: String!,
    last_name: String
  }
  type Album {
    id: ID!,
    album_name: String!,
    album_description: String,
    images: [Image]
  },
  type Image {
    id: ID!,
    name: String,
    description: String,
    size: String,
    date: String
}
`
  module.exports = typeDefs