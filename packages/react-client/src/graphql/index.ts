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

export const useApolloQuery = <K extends keyof Queries, P = Queries[K]['params'], R = Queries[K]['returns']>(
  qKey: K,
  params?: Params<R, P>
) => {
  return useQuery<R, P>(queries[qKey], params);
};
