import express from 'express';
import 'reflect-metadata';
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'type-graphql';
import cors from 'cors';
import {
  CatResolver,
  CommentResolver,
  OwnerResolver,
} from './graphql/resolvers';

(async () => {
  const schema = await buildSchema({
    resolvers: [CatResolver, CommentResolver, OwnerResolver],
  });

  const app = express();
  app.use(cors());
  app.use(
    '/graphql',
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(4000);
})();
