const { GraphQLList } = require('graphql');
const { CatType } = require('../types');
const db = require('../../db.json');

const cats = {
  type: new GraphQLList(CatType),
  args: {},
  resolve: () => db.cats,
};

module.exports.cats = cats;
