import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from "graphql";
import { addResolveFunctionsToSchema } from "graphql-tools";
import query from "./query";
import mutation from "./mutation";
import { resolvers } from "./resolvers";

const schema = new GraphQLSchema({
  query,
  mutation,
});

// const resolverValidationOptions = {
//   requireResolversForResolveType: false,
// };

addResolveFunctionsToSchema({
  schema,
  resolvers,
});

module.exports = schema;
