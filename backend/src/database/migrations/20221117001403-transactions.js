'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const TransactionTable = queryInterface.createTable("transactions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      value: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      debiteAccountId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      creditedAccountId: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    return TransactionTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("transactions"),
};
