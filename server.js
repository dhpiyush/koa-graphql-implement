const Koa = require('koa');
const app = new Koa();
const schema = require('./graphql/schema');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');

app.listen(9000,()=>{
    console.log('server is running on 9000');
});

app.on('error', err => {
  log.error('server error', err)
});

// var root = {
//     test: function (args) {
//         const t = {
//             id: args.id,
//             name:'test'
//         }
//         return t;
//     }
// }
app.use(mount('/graphql', graphqlHTTP({
 schema: schema,
//  rootValue:root,
 graphiql: true
})))