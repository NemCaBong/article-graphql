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

    getArticle: async (_, args) => {
      const { id } = args;
      const article = await Article.findOne({
        deleted: false,
        _id: id,
      });

      return article;
    },
  },
  Mutation: {
    createArticle: async (_, args) => {
      const { article } = args;
      const record = new Article(article);
      await record.save();
      return record;
    },
  },
};
// Resolvers na ná controller
// typeDefs tương tự models
