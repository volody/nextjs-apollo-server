// lib/apolloClient.ts (TypeScript)
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'node-fetch';

export default function clientFactory(sessionKey: string) {

  const httpLink = createHttpLink({
    uri: 'http://localhost:5000/graphql'
  });

  // Use 'setContext' to inject the session key in the 'Authorization' header
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        Authorization: sessionKey ? `Bearer ${sessionKey}` : '',
      },
    };
  });

  // Combine authLink and httpLink
  return new ApolloClient({
    // 'ssrMode' ensures Apollo Client is aware it’s running on the server
    ssrMode: true,
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
}
