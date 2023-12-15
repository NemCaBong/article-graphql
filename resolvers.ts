import Article from "./models/article.model";
import Category from "./models/category.model";

/**
 * Func này return cái gì thì
 * biến hello bên typeDefs
 * nhận về cái đó
 * nó chọc vào Query rồi lấy ra
 */
export const resolvers = {
  Query: {
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
    getListCategory: async () => {
      const list = await Category.find({
        deleted: false,
      });

      return list;
    },
    getCategory: async (_, args) => {
      const { id } = args;
      const category = await Category.findOne({
        deleted: false,
        _id: id,
      });

      return category;
    },
  },
  Mutation: {
    createArticle: async (_, args) => {
      const { article } = args;
      const record = new Article(article);
      await record.save();
      return record;
    },
    updateArticle: async (_, args) => {
      const { id, article } = args;
      await Article.updateOne(
        {
          _id: id,
        },
        article
      );
      const record = await Article.findOne({
        _id: id,
      });
      return record;
    },
    deleteArticle: async (_, args) => {
      const { id } = args;
      await Article.updateOne(
        {
          _id: id,
          deleted: false,
        },
        {
          deleted: true,
          deletedAt: new Date(),
        }
      );
      return "Delete thành công";
    },

    createCategory: async (_, args) => {
      const { category } = args;
      const record = new Category(category);
      await record.save();
      return record;
    },
    updateCategory: async (_, args) => {
      const { id, category } = args;
      await Category.updateOne(
        {
          _id: id,
        },
        category
      );
      const record = await Category.findOne({
        _id: id,
      });
      return record;
    },
    deleteCategory: async (_, args) => {
      const { id } = args;
      await Category.updateOne(
        {
          _id: id,
          deleted: false,
        },
        {
          deleted: true,
          deletedAt: new Date(),
        }
      );
      return "Delete thành công";
    },
  },
  Article: {
    category: async (article) => {
      const id = article.categoryId;
      const category = await Category.findOne({
        deleted: false,
        _id: id,
      });

      return category;
    },
  },
};
// Resolvers na ná controller
// typeDefs tương tự models
