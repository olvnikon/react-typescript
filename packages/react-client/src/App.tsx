import { ApolloProvider } from '@apollo/client';
import { client } from './apolloClient';
import { useApolloQuery } from './hooks/useApolloQuery';

const Comp = () => {
  const { data } = useApolloQuery('catFull', {
    variables: {
      id: 1,
    },
  });
  const { data: catsData } = useApolloQuery('catsFull');

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
