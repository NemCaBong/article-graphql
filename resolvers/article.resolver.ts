import Article from "../models/article.model";
import Category from "../models/category.model";

export const resolversArticle = {
  Query: {
    getListArticle: async (_, args) => {
      const { sortKey, sortValue, limitItems, currentPage } = args;

      const sort = {};
      if (sortKey && sortValue) {
        sort[sortKey] = sortValue;
      }

      const skip = (currentPage - 1) * limitItems;

      const articles = await Article.find({
        deleted: false,
      })
        .sort(sort)
        .skip(skip)
        .limit(limitItems);

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
