import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from "graphql";
import { TestGraphQLType } from "./testType";

// const configArgParamType = new GraphQLInputObjectType({
//   name: 'ConfigArgParamType',
//   fields: {
//     name: {type: GraphQLString},
//     value: {type: GraphQLString}
//   }
// });

// export const shoppingTypeType = new GraphQLEnumType({
//   name: 'ShoppingTypeType',
//   values: {
//     ONLINE_REWARDS: {value: SHOPPING_RANGE.ONLINE_REWARDS}
//   }
// });

export default new GraphQLObjectType({
  name: "Query",
  fields: {
    test: {
      type: TestGraphQLType,
      args: { id: { type: GraphQLString } },
    },
  },
});
