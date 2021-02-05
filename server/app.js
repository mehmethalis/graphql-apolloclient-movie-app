require('dotenv').config();
const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const app = express();

//db
const db=require('./helper/db')();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(process.env.PORT, () => {
    console.log(`Server is running... PORT:${process.env.PORT}`)
})