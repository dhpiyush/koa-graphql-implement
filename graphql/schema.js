const { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLNonNull} = require('graphql');
const TestGraphQLType =  require('./testType');

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    test: {
      type: TestGraphQLType,
      args: { id: { type: GraphQLString }},
      resolve(parent, args) {
        const t = {
            id: args.id,
            name:'test'
        }
        return t;
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutations',
  description: 'These are the things we can change',
  fields: () => ({
    deleteTest: {
      type: TestGraphQLType,
      description: 'Delete Test',
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve: (value, { id }) => {
        const t = {
            id: id,
            name:'Delete'
        }
        return t;
      }
    }
  }),
});

module.exports = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});
