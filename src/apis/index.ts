import gql from 'graphql-tag';
import { createApolloClient } from '@/apis/create-apollo-client';

export const client = createApolloClient();

export const USER_REPOSITORIES_QUERY = gql`
  query($userId: String!) {
    user(login: $userId) {
      login
      repositories(
        first: 10
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
