const { ApolloServer, gql } = require('apollo-server');

// 1. Define your GraphQL schema (type definitions)
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// 2. Provide resolver functions for the schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello World!',
  },
};

// 3. Initialize the Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// 4. Start the server
server.listen({ port: 5000 }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
