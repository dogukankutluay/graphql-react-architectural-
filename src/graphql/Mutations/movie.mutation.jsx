import { gql } from 'apollo-boost';
export const CREATE_MOVIE = gql`
  mutation {
    createMovie {
      id
      title
      description
      year
    }
  }
`;
