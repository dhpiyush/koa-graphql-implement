import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";
import { TestGraphQLType } from "./testType";

export default new GraphQLObjectType({
  name: "Mutation",
  description: "These are the things we can change",
  fields: () => ({
    deleteTest: {
      type: TestGraphQLType,
      description: "Delete Test",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
      },
    },
    updateTest: {
      type: TestGraphQLType,
      description: "Update Test",
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
      },
    },
  }),
});
