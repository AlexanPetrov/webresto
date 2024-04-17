// GraphQL schema

const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    getMenuItems(category: String!): [MenuItem]
  }

  type MenuItem {
    name: String!
    description: String
    price: Float!
  }
`;

module.exports = typeDefs;
