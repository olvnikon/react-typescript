import { gql } from '@apollo/client';

export type CatShort = {
  id: number;
  name: string;
};

export const catsShort = gql`
  query catsFull {
    cats {
      id
      name
    }
  }
`;
