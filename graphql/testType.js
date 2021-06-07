import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLList,
  GraphQLFloat,
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLUnionType,
  GraphQLID,
  GraphQLInputObjectType,
} from "graphql";

export const TestGraphQLType = new GraphQLObjectType({
  name: "Test",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  }),
});
