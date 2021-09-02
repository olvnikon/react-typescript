import { useQuery, DocumentNode, QueryHookOptions } from '@apollo/client';

export type Query<E extends string, P, R> = {
  params: P;
  returns: Record<E, R>;
};

export type QueriesGen = Record<string, Query<string, unknown, unknown>>;

type QueryHookOptionsOVars<R, P> = Omit<QueryHookOptions<R, P>, 'variables'>;
type Params<R, P> = QueryHookOptionsOVars<R, P> & {
  variables: P;
};

export const genUseApolloQueryHook =
  <Q extends QueriesGen, T extends Record<keyof Q, DocumentNode>>(queries: T) =>
  <K extends keyof Q>(
    qKey: K,
    ...params: Q[K]['params'] extends void
      ? [QueryHookOptionsOVars<Q[K]['returns'], Q[K]['params']>?]
      : [Params<Q[K]['returns'], Q[K]['params']>]
  ) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useQuery<Q[K]['returns'], Q[K]['params']>(queries[qKey], params[0]);
  };
