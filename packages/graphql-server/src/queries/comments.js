const { GraphQLList, GraphQLInt } = require('graphql');
const { CommentType } = require('../types');
const db = require('../../db.json');

const comments = {
  type: new GraphQLList(CommentType),
  args: {
    catId: {
      type: GraphQLInt,
    },
  },
  resolve: (_p, { catId }) => (catId ? db.comments.filter(({ cat }) => cat === catId) : db.comments),
};

module.exports.comments = comments;
