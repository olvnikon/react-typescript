import { gql } from '@apollo/client';

export const catsFull = gql`
  query catsFull {
    cats {
      id
      name
      owner {
        id
        name
      }
      comments {
        id
        cat
        owner
        text
      }
    }
  }
`;
