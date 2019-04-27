const { GraphQLString, GraphQLObjectType } = require('graphql');;

const Test = new GraphQLObjectType({
  name: 'Test',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  })
});

module.exports = Test;