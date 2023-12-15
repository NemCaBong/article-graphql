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
  type Category {
    id: ID
    title: String
    avatar: String
  }

  type Query {
    getListArticle: [Article]
    getArticle(id: ID): Article
    getListCategory: [Category]
    getCategory(id: ID): Category
  }

  input ArticleInput {
    title: String
    avatar: String
    description: String
  }

  input CategoryInput {
    title: String
    avatar: String
  }

  type Mutation {
    createArticle(article: ArticleInput): Article
    updateArticle(id: ID, article: ArticleInput): Article
    deleteArticle(id: ID): String

    createCategory(category: CategoryInput): Category
    updateCategory(id: ID, category: CategoryInput): Category
    deleteCategory(id: ID): String
  }
`;
