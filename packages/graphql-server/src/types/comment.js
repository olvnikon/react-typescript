const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: { type: GraphQLInt },
    cat: { type: GraphQLInt },
    owner: { type: GraphQLInt },
    text: { type: GraphQLString },
  }),
});

module.exports.CommentType = CommentType;
