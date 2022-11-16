'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const AccountTable = queryInterface.createTable("accounts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      balance: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    });

    return AccountTable;
  },

  down: async (queryInterface) => queryInterface.dropTable("accounts"),
};
