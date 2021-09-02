import { genUseApolloQueryHook, QueriesGen, Query } from '../graphql';
import {
  catsFull,
  CatFull,
  catsShort,
  CatShort,
  catFull,
} from '../graphql/queries';

// Extending the interface for proper typing.
// first string will be later used as a key in data, e.g. "data.cats"
interface Queries extends QueriesGen {
  catsFull: Query<'cats', void, CatFull[]>;
  catsShort: Query<'cats', void, CatShort[]>;
  catFull: Query<'cat', { id: number }, CatFull>;
}

// "Queries" and "queries" should be aligned
const queries = {
  catsFull,
  catsShort,
  catFull,
} as const;

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useApolloQuery = genUseApolloQueryHook<Queries, typeof queries>(
  queries
);
