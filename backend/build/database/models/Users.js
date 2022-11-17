"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
const Account_1 = require("./Account");
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: sequelize_1.STRING,
    },
    password: {
        type: sequelize_1.STRING,
    },
    accountId: {
        type: sequelize_1.INTEGER,
    },
}, {
    sequelize: _1.default,
    modelName: 'users',
    underscored: true,
    timestamps: false
});
Users.belongsTo(Account_1.default, { foreignKey: 'accountId', as: 'Idaccount' });
exports.default = Users;
//# sourceMappingURL=Users.js.map