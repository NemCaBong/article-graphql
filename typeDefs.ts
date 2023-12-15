import { gql } from "apollo-server-express";

/**
 * Định nghĩa các trường data, datatypes cho phép FE lấy
 * dùng keyword gql
 */

export const typeDefs = gql`
  type Query {
    hello: String
  }
`;
