"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Op = require("sequelize");
const Users_1 = require("../database/models/Users");
const Account_1 = require("../database/models/Account");
const Transactions_1 = require("../database/models/Transactions");
class UsersRepository {
    constructor(model = Users_1.default, model2 = Transactions_1.default, model3 = Account_1.default) {
        this.model = model;
        this.model2 = model2;
        this.model3 = model3;
        this.model = model;
        this.model2 = model2;
        this.model3 = model3;
    }
    async findUserBalance(id) {
        const findUsers = await this.model.findOne({
            where: { id },
            attributes: { exclude: ['password', 'id', 'username', 'accountid'] },
            include: [{
                    model: Account_1.default,
                    as: 'idaccount',
                    attributes: ['balance'],
                }],
        });
        return findUsers;
    }
    async findOne(username) {
        const listUser = await this.model.findOne({ where: { username } });
        return listUser;
    }
    async findOneByPk(id) {
        const listUser = await this.model.findByPk(id);
        return listUser;
    }
    async createTransaction(value, debiteAccountId, creditedAccountId) {
        const createTransaction = await this.model2.create({
            value,
            createdAt: new Date(),
            debiteAccountId,
            creditedAccountId,
        });
        return createTransaction.dataValues.id;
    }
    async updateBalance(id, balance) {
        await this.model3.update({
            balance,
        }, {
            where: { id },
        });
        return true;
    }
    async findUserTransactionDebited(id) {
        const findUsers = await this.model2.findAll({
            where: { debiteAccountId: id },
            include: [{
                    model: Account_1.default,
                    as: 'debiteAccount',
                    attributes: { exclude: ['id', 'balance'] },
                }],
            order: [
                ['createdAt', 'DESC']
            ],
        });
        return findUsers;
    }
    async findUserTransactionCredited(id) {
        const findUsers = await this.model2.findAll({
            where: { creditedAccountId: id },
            include: [{
                    model: Account_1.default,
                    as: 'creditedAccount',
                    attributes: { exclude: ['id', 'balance'] },
                }],
            order: [
                ['createdAt', 'DESC']
            ],
        });
        return findUsers;
    }
    async findUserAllTransaction(id) {
        const findUsers = await this.model2.findAll({
            where: {
                [Op.Op.or]: [
                    { creditedAccountId: id },
                    { debiteAccountId: id },
                ],
            },
            include: [{
                    model: Account_1.default,
                    as: 'creditedAccount',
                    attributes: { exclude: ['id', 'balance'] },
                },
                {
                    model: Account_1.default,
                    as: 'debiteAccount',
                    attributes: { exclude: ['id', 'balance'] },
                }],
            order: [
                ['createdAt', 'DESC']
            ],
        });
        return findUsers;
    }
    async findUserDataTransaction(id, startDate, endDate) {
        const findUsers = await this.model2.findAll({
            where: {
                [Op.Op.and]: [
                    { createdAt: {
                            [Op.Op.lt]: new Date(new Date(endDate).getTime() + 60 * 60 * 24 * 1000 - 1),
                            [Op.Op.gt]: new Date(startDate),
                        } },
                    {
                        [Op.Op.or]: [
                            { creditedAccountId: id },
                            { debiteAccountId: id },
                        ],
                    },
                ],
            },
            include: [{
                    model: Account_1.default,
                    as: 'creditedAccount',
                    attributes: { exclude: ['id', 'balance'] },
                },
                {
                    model: Account_1.default,
                    as: 'debiteAccount',
                    attributes: { exclude: ['id', 'balance'] },
                }],
            order: [
                ['createdAt', 'DESC']
            ],
        });
        return findUsers;
    }
    async findUserDataTransactionDebited(id, startDate, endDate) {
        const findUsers = await this.model2.findAll({
            where: {
                [Op.Op.and]: [
                    { createdAt: {
                            [Op.Op.lt]: new Date(new Date(endDate).getTime() + 60 * 60 * 24 * 1000 - 1),
                            [Op.Op.gt]: new Date(startDate),
                        } },
                    {
                        debiteAccountId: id,
                    },
                ],
            },
            include: [
                {
                    model: Account_1.default,
                    as: 'debiteAccount',
                    attributes: { exclude: ['id', 'balance'] },
                }
            ],
            order: [
                ['createdAt', 'DESC']
            ],
        });
        return findUsers;
    }
    async findUserDataTransactionCredtid(id, startDate, endDate) {
        const findUsers = await this.model2.findAll({
            where: {
                [Op.Op.and]: [
                    { createdAt: {
                            [Op.Op.lt]: new Date(new Date(endDate).getTime() + 60 * 60 * 24 * 1000 - 1),
                            [Op.Op.gt]: new Date(startDate),
                        } },
                    {
                        creditedAccountId: id,
                    },
                ],
            },
            include: [{
                    model: Account_1.default,
                    as: 'creditedAccount',
                    attributes: { exclude: ['id', 'balance'] },
                }],
            order: [
                ['createdAt', 'ASC']
            ],
        });
        return findUsers;
    }
}
exports.default = UsersRepository;
//# sourceMappingURL=Usersrepository.js.map