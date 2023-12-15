import express, { Express, Request, Response } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import { ApolloServer, gql } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startServer = async () => {
  dotenv.config();

  database.connect();

  const app: Express = express();
  const port: number | string = process.env.PORT || 3000;

  // GraphQL
  /**
   * Muốn dùng đc thì phải tạo mới ra 1 server apollo
   */
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  // start
  await apolloServer.start();

  // tạo ra api theo apollo server
  apolloServer.applyMiddleware({
    app: app,
    path: "/graphql",
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
};
startServer();
