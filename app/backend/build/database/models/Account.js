"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Account extends sequelize_1.Model {
}
Account.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    balance: {
        type: (0, sequelize_1.FLOAT)(),
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'accounts',
    timestamps: false
});
exports.default = Account;
//# sourceMappingURL=Account.js.map