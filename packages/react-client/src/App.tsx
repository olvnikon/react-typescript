import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient';
import { useApolloQuery } from './graphql';

const Comp = () => {
  const { data } = useApolloQuery('catFull', {
    variables: {
      id: 'asd',
    },
  });

  return <div>Hello {data?.cat.name}</div>;
};

export const App = () => {
  return <ApolloProvider client={client} children={<Comp />} />;
};
