import { gql } from '@apollo/client';

export type CatFull = {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
  };
  comments: Array<{
    id: number;
    cat: number;
    owner: number;
    text: string;
  }>;
};

export const catFull = gql`
  query catsFull($id: Float!) {
    cat(id: $id) {
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
