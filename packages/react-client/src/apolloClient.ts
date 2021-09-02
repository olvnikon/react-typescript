import { ApolloClient, InMemoryCache } from '@apollo/client';

// TODO: move to client
export const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL,
  cache: new InMemoryCache(),
});
