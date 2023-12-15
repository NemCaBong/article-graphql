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
  },
};
// Resolvers na ná controller
// typeDefs tương tự models
