// Functions to resolve queries

// Import menu data from the data module
const menuData = require("./data");
// Define resolvers for GraphQL queries
const resolvers = {
  Query: {
    // Resolver function for retrieving menu items by category
    getMenuItems: (parent, { category }, context, info) => {
      // Return items for the requested category or an empty array if the category doesn't exist
      return menuData[category] || [];
    },
  },
};
// Export the resolvers for use in the Apollo Server setup
module.exports = resolvers;
