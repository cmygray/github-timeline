import ApolloClient from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { onError, ErrorHandler } from 'apollo-link-error';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';

const errorHandler: ErrorHandler = ({ graphQLErrors, networkError }): void => {
  if (graphQLErrors) {
    console.log('graphQL error');
  }

  if (networkError) {
    console.log('network error');
  }
};

export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  return new ApolloClient({
    link: onError(errorHandler).concat(
      new HttpLink({
        uri: 'https://api.github.com/graphql',
        headers: {
          authorization: `Bearer ${process.env.VUE_APP_GITHUB_API_TOKEN}`,
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
}
