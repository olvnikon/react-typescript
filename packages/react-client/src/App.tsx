import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient';
import { useApolloQuery } from './hooks/useApolloQuery';

const Comp = () => {
  const { data } = useApolloQuery('catFull', {
    // Variables are mandatory and properly typed
    variables: { id: 1 },
    // Polling for keeping data persistent
    pollInterval: 2000,
  });

  // Variables are not allowed
  const { data: catsData } = useApolloQuery('catsFull', { pollInterval: 2000 });

  return (
    <div>
      <div>Hello one cat: {data?.cat.name}</div>
      {catsData?.cats.map((cat) => (
        <div key={cat.id}>
          One of cats: {cat.name}, owner: {cat.owner.name}
        </div>
      ))}
    </div>
  );
};

export const App = () => {
  return <ApolloProvider client={client} children={<Comp />} />;
};
