import HTTPError from "http-errors";

export const resolvers = {
  Query: {
    test(rootValue, args, context, info) {
      console.log("va", rootValue);
      return rootValue.map.get(args.id);
    },
  },
  Mutation: {
    deleteTest(rootValue, args) {
      console.log("rooot", rootValue);
      rootValue.map.delete(args.id);
      return { id: args.id };
    },
    updateTest(rootValue, args) {
      console.log("--->", rootValue);
      const val = rootValue.map.get(args.id);
      if (!val) {
        rootValue.map.set(args.id, { id: args.id, name: args.name });
        return { id: args.id, name: args.name };
      }
      val.name = args.name;
      return val;
    },
  },
};
