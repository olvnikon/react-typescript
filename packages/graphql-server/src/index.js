const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLObjectType, GraphQLSchema } = require('graphql');
const cors = require('cors');
const { cats, comments, owners } = require('./queries');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    cats,
    comments,
    owners,
  },
});
const schema = new GraphQLSchema({ query: RootQuery });

const app = express();
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(4000);
