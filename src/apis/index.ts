import gql from 'graphql-tag';
import { createApolloClient } from '@/apis/create-apollo-client';

export const client = createApolloClient();

export const USER_REPOSITORIES_QUERY = gql`
  query($userId: String!, $endCursor: String) {
    user(login: $userId, after: $endCursor) {
      login
      repositories(
        first: 10
        after
        affiliations: [OWNER]
        privacy: PUBLIC
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          name
          description
          isFork
          createdAt
          updatedAt
          stargazers {
            totalCount
          }
        }
      }
    }
  }
`;
