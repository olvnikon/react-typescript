import { useQuery, DocumentNode, QueryHookOptions } from '@apollo/client';
import { catsFull, CatFull, catsShort, CatShort, catFull } from './queries';

type Query<E extends string, P, R> = {
  params: P;
  returns: Record<E, R>;
};

type QueriesGen = Record<string, Query<string, unknown, unknown>>;

type Queries2 = {
  catsFull: Query<'cats', void, CatFull[]>;
  catsShort: Query<'cats', void, CatShort[]>;
  catFull: Query<'cat', { id: number }, CatFull>;
};

type Params<R, P> = Omit<QueryHookOptions<R, P>, 'variables'> & {
  variables: P;
};

export const useApolloQuery =
  <Q extends QueriesGen, T extends Record<keyof Q, DocumentNode>>(queries: T) =>
  <K extends keyof Q>(
    qKey: K,
    ...params: Q[K]['params'] extends void ? [undefined?] : [Params<Q[K]['returns'], Q[K]['params']>]
  ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery<Q[K]['returns'], Q[K]['params']>(queries[qKey], params[0]);
  };

const queries = {
  catsFull,
  catsShort,
  catFull,
} as const;
// eslint-disable-next-line react-hooks/rules-of-hooks
export const newHook = useApolloQuery<Queries2, typeof queries>(queries);
