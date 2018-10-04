const { GraphQLServer } = require('graphql-yoga')
const typeDefs = require('./typedefs')
 
const TypeDefs = `
  type Query {
    hello(name: String): String!
  }
`
 
const resolvers = {
  Query: {
    item: () => `Hello World`,
  },
}
 
const server = new GraphQLServer({ TypeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))