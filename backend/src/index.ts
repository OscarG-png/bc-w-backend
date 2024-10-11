import express from "express";
require("dotenv").config();
const { createHandler } = require("graphql-http/lib/use/express");
const { buildSchema } = require("graphql");

const port = process.env.PORT ? parseInt(process.env.PORT) : 3001;

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);
const root = {
    hello() {
        return "Hello from Graphql!";
    },
};

const app = express();
app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
);
app.listen(port);
