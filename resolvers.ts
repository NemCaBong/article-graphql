import Article from "./models/article.model";

/**
 * Func này return cái gì thì
 * biến hello bên typeDefs
 * nhận về cái đó
 * nó chọc vào Query rồi lấy ra
 */
export const resolvers = {
  Query: {
    hello: () => {
      return "Hello world";
    },
    getListArticle: async () => {
      const articles = await Article.find({
        deleted: false,
      });

      return articles;
    },
  },
};
// Resolvers na ná controller
// typeDefs tương tự models
