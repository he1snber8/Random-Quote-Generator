import { gql } from 'graphql-request';

export const GET_RANDOM_QUOTE = gql`
  query GetRandomQuote {
    randomQuote {
      text
      author
    }
  }
`;
