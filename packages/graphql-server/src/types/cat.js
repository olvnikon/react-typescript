const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const CatType = new GraphQLObjectType({
  name: 'Cat',
  fields: () => ({
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    owner: { type: GraphQLInt },
  }),
});

module.exports.CatType = CatType;
