import { gql } from 'apollo-boost';
export const GET_MOVIES = gql`
  query {
    movies {
      id
      title
      description
      year
    }
  }
`;
