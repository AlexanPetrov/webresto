// Main server & middleware

// Load environment variables from .env file
require("dotenv").config();

// Import necessary modules, schema, resolvers
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./types");
const resolvers = require("./resolvers");

// Initialize Express application
const app = express();

// Create Apollo Server with schema and resolvers
const server = new ApolloServer({ typeDefs, resolvers });

// Function to start the Apollo Server
async function startApolloServer() {
  // Start Apollo Server
  await server.start();
  // Apply Apollo GraphQL middleware and set up the GraphQL endpoint
  server.applyMiddleware({ app });
  // Define the port number from environment variables or default
  const PORT = process.env.PORT || 5500;
  // Start listening on the port if not in test environment
  if (process.env.NODE_ENV !== "test") {
    app.listen(PORT, () => {
      console.log(
        `🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  }
}
// Execute the function to start the server
startApolloServer();
// Export the Express application for testing
module.exports = app;
