"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
class UserService {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    async findeUserBalance(id) {
        const user = await this.model.findUserBalance(id);
        return user.dataValues.idaccount.dataValues.balance;
    }
    async findUserCredited(username) {
        const user = await this.model.findOne(username);
        return user.dataValues.id;
    }
    async findUserIdAccont(id) {
        const user = await this.model.findOneByPk(id);
        return user.dataValues.accountid;
    }
    async userBalanceDebited(id, value) {
        const userBalanceDebited = await this.findeUserBalance(id);
        const valueFinal = Number(userBalanceDebited) - value;
        return valueFinal;
    }
    async userBalanceCredited(Credname, value) {
        const userCreditedId = await this.findUserCredited(Credname);
        const userBalanceCredited = await this.findeUserBalance(Number(userCreditedId));
        const valueFinal = Number(userBalanceCredited) + value;
        return valueFinal;
    }
    async userTransactionCreate(value, iddebited, idcreated) {
        await this.model.createTransaction(value, iddebited, idcreated);
        return true;
    }
    async userTransactionUpdateBalance(id, balance) {
        await this.model.updateBalance(id, balance);
        return true;
    }
    async userTransaction(id, credname, value) {
        const userBalanceDebited = await this.userBalanceDebited(id, value);
        const userBalanceCredited = await this.userBalanceCredited(credname, value);
        const userCreditedId = await this.findUserCredited(credname);
        await this.userTransactionCreate(value, id, Number(userCreditedId));
        const UserAccountDebited = await this.findUserIdAccont(id);
        const UserAccountCredited = await this.findUserIdAccont(Number(userCreditedId));
        await this.userTransactionUpdateBalance(Number(UserAccountDebited), userBalanceDebited);
        await this.userTransactionUpdateBalance(Number(UserAccountCredited), userBalanceCredited);
        return true;
    }
    async findUserTransactionData(id, startDate) {
        const data = moment(startDate, 'DD/MM/YYYY');
        const dataFormat = data.format('YYYY-MM-DD');
        const users = await this.model.findUserDataTransaction(id, dataFormat, dataFormat);
        return users;
    }
    async findUserTransactionDebited(id) {
        const Users = await this.model.findUserTransactionDebited(id);
        return Users;
    }
    async findUserTransactionCredited(id) {
        const Users = await this.model.findUserTransactionCredited(id);
        return Users;
    }
    async findUserTransactionAll(id) {
        const Users = await this.model.findUserAllTransaction(id);
        return Users;
    }
    async filterUserDebiteOrCredite(id, debiteOrCredite) {
        if (debiteOrCredite === 'debited') {
            const Users = await this.findUserTransactionDebited(id);
            return Users;
        }
        const Users = await this.findUserTransactionCredited(id);
        return Users;
    }
    async filterUserDebiteOrCrediteData(id, startDate, debiteOrCredite) {
        const data = moment(startDate, 'DD/MM/YYYY');
        const dataFormat = data.format('YYYY-MM-DD');
        if (debiteOrCredite === 'debited') {
            const Users = await this.model.findUserDataTransactionDebited(id, dataFormat, dataFormat);
            return Users;
        }
        const Users = await this.model.findUserDataTransactionCredtid(id, dataFormat, dataFormat);
        return Users;
    }
}
exports.default = UserService;
//# sourceMappingURL=UserService.js.map