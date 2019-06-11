import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError, ErrorHandler } from 'apollo-link-error';
import { InMemoryCache } from 'apollo-cache-inmemory';

const errorHandler: ErrorHandler = ({ graphQLErrors, networkError }): void => {
  if (graphQLErrors) {
    console.log('graphQL error');
  }

  if (networkError) {
    console.log('network error');
  }
};

export default new ApolloClient({
  link: onError(errorHandler).concat(
    new HttpLink({
      uri: 'https://api.github.com/graphql',
      headers: {
        authorization: 'Bearer 54c6a129a9fb78669754185602da69c1ad799e4b',
      },
    })
  ),
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      errorPolicy: 'all',
    },
  },
});
