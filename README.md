Web Restautant API:

package.json
*** dependencies

data.js
*** menu data for database

index.js
*** server & middleware

resolvers.js
*** query fetchers 

types.js
*** graphQL schema 

tests/menu.test.js
*** tests

.env
*** environment variables

.gitignore 
*** to ignore by git

.assignment.txt
*** assignment

Start Server in dev mode (command line w/ nodemon):

npm run dev

Access GraphQL Playground:

http://localhost:5500/graphql

Query Sample:

query {
  getMenuItems(category: "appetizers") {
    name
    description
    price
  }
}

Testing:

npm test

THANKS FOR REVIEWING!!!