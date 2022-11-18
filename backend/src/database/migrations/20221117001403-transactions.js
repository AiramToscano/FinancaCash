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
      debite_account_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      credited_account_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });

    return TransactionTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("transactions"),
};
