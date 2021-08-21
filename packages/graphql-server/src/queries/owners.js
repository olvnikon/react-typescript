const { GraphQLList } = require('graphql');
const { OwnerType } = require('../types');
const db = require('../../db.json');

const owners = {
  type: new GraphQLList(OwnerType),
  args: {},
  resolve: () => db.owners,
};

module.exports.owners = owners;
