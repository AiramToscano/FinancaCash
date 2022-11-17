"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Account_1 = require("./Account");
class Transaction extends sequelize_1.Model {
}
Transaction.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    value: {
        type: sequelize_1.INTEGER,
    },
    createdAt: {
        type: sequelize_1.DATE,
    },
    debiteAccountId: {
        type: sequelize_1.INTEGER,
    },
    creditedAccountId: {
        type: sequelize_1.INTEGER,
    },
}, {
    sequelize: _1.default,
    modelName: 'transactions',
    underscored: true,
    timestamps: false
});
Transaction.belongsTo(Account_1.default, { foreignKey: 'debiteAccountId', as: 'debiteAccount' });
Transaction.belongsTo(Account_1.default, { foreignKey: 'creditedAccountId', as: 'creditedAccount' });
exports.default = Transaction;
//# sourceMappingURL=Transactions.js.map