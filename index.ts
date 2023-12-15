import express, { Express } from "express";
import * as database from "./config/database";
import dotenv from "dotenv";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs/index.typeDefs";
import { resolvers } from "./resolvers";

const startServer = async () => {
  dotenv.config();

  database.connect();

  const app: Express = express();
  const port: number | string = process.env.PORT || 3000;

  /**
   * Muốn dùng đc thì phải tạo mới ra 1 server apollo
   */
  const apolloServer = new ApolloServer({
    typeDefs: typeDefs,
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
