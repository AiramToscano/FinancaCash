module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('accounts', [
      {
        balance: 100,
          // senha: secret_admin
      },
      {
        balance: 100,
      },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('accounts', null, {});
  },
};
