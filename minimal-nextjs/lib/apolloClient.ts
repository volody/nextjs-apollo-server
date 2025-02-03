// lib/apolloClient.ts (TypeScript)
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // Replace with your Apollo Server URL
  cache: new InMemoryCache(),
});

export default client;
