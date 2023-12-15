import Category from "../models/category.model";

export const resolversCategory = {
  Query: {
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
};
