import { gql } from "apollo-server-express";

// các key trong type của gql không nhất thiết
// phải giống trong model.
export const typeDefsUser = gql`
  type User {
    id: ID
    fullName: String
    email: String
    token: String
    code: Int
    message: String
  }

  input RegisterUserInput {
    fullName: String
    email: String
    password: String
  }

  type Mutation {
    registerUser(user: RegisterUserInput): User
  }
`;