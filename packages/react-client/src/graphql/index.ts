import { useQuery, DocumentNode, QueryHookOptions } from '@apollo/client';
import { catsFull, CatFull, catsShort, CatShort, catFull } from './queries';

type Query<E extends string, P, R> = {
  params: P;
  returns: Record<E, R>;
};

type Queries = {
  catsFull: Query<'cats', void, CatFull[]>;
  catsShort: Query<'cats', void, CatShort[]>;
  catFull: Query<'cat', { id: number }, CatFull>;
};

const queries: Record<keyof Queries, DocumentNode> = {
  catsFull,
  catsShort,
  catFull,
};

type Params<R, P> = Omit<QueryHookOptions<R, P>, 'variables'> & {
  variables: P;
};

export const useApolloQuery = <K extends keyof Queries>(
  qKey: K,
  params?: Params<Queries[K]['returns'], Queries[K]['params']>
) => {
  return useQuery<Queries[K]['returns'], Queries[K]['params']>(queries[qKey], params);
};
