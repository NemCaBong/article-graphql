import { gql } from "apollo-server-express";

/**
 * Định nghĩa các trường data, datatypes cho phép FE lấy
 * giống như model
 * dùng keyword gql
 */

export const typeDefs = gql`
  type Article {
    id: ID
    title: String
    avatar: String
    description: String
  }

  type Query {
    hello: String
    getListArticle: [Article]
    getArticle(id: ID): Article
  }
`;
