require('dotenv').config();
const express = require('express');
const cors = require('cors');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
app.use(cors());
//db
const db = require('./helper/db')();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT, () => {
    console.log(`Server is running... PORT:${process.env.PORT}`)
})