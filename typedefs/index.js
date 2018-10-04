const typeDefs = `
  type Query {
    items: [Item!]!
  }
  type Item {
    name: String!
  }
  `
  module.exports = typeDefs