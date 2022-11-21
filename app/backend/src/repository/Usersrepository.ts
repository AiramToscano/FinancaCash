import Op = require('sequelize');
import Users from '../database/models/Users';
import Account from '../database/models/Account';
import Transaction from '../database/models/Transactions';
import { IModel } from '../interfaces/UsersInterface';

export default class UsersRepository implements IModel {
  constructor(private model = Users, private model2 = Transaction, private model3 = Account) {
    this.model = model;
    this.model2 = model2;
    this.model3 = model3;
  }

  async findUserBalance(id: number):Promise<Users> {
    const findUsers = await this.model.findOne({
      where: { id },
      attributes: { exclude: ['password', 'id', 'username', 'accountid'] },
      include: [{
        model: Account,
        as: 'idaccount',
        attributes: ['balance'],
      }],
    });
    return findUsers as Users;
  }

  async findOne(username: string):Promise<Users> {
    const listUser = await this.model.findOne({ where: { username } });
    return listUser as Users;
  }

  async findOneByPk(id: number):Promise<Users> {
    const listUser = await this.model.findByPk(id);
    return listUser as Users;
  }

  async createTransaction(
    value: number,
    debiteAccountId: number,
    creditedAccountId: number,
  )
    : Promise<Transaction> {
    const createTransaction = await this.model2.create(
      {
        value,
        createdAt: new Date(),
        debiteAccountId,
        creditedAccountId,
      },
    );
    return createTransaction.dataValues.id;
  }

  async updateBalance(id: number, balance:number):Promise<boolean> {
    await this.model3.update(
      {
        balance,
      },
      {
        where: { id },
      },
    );
    return true;
  }

  async findUserTransactionDebited(id: number):Promise<Transaction[]> {
    const findUsers = await this.model2.findAll({
      where: { debiteAccountId: id },
      include: [{
        model: Account,
        as: 'debiteAccount',
        attributes: { exclude: ['id', 'balance'] },
      }],
      order: [
        ['createdAt', 'DESC']],
    });
    return findUsers as Transaction[];
  }

  async findUserTransactionCredited(id: number):Promise<Transaction[]> {
    const findUsers = await this.model2.findAll({
      where: { creditedAccountId: id },
      include: [{
        model: Account,
        as: 'creditedAccount',
        attributes: { exclude: ['id', 'balance'] },
      }],
      order: [
        ['createdAt', 'DESC']],
    });
    return findUsers as Transaction[];
  }

  async findUserAllTransaction(id: number):Promise<Transaction[]> {
    const findUsers = await this.model2.findAll({
      where: {
        [Op.Op.or]: [
          { creditedAccountId: id },
          { debiteAccountId: id },
        ],
      },
      include: [{
        model: Account,
        as: 'creditedAccount',
        attributes: { exclude: ['id', 'balance'] },
      },
      {
        model: Account,
        as: 'debiteAccount',
        attributes: { exclude: ['id', 'balance'] },
      }],
      order: [
        ['createdAt', 'DESC']],
    });
    return findUsers as Transaction[];
  }

  async findUserDataTransaction(id: number, startDate: string, endDate: string): Promise<Transaction[]> {
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
        model: Account,
        as: 'creditedAccount',
        attributes: { exclude: ['id', 'balance'] },
      },
      {
        model: Account,
        as: 'debiteAccount',
        attributes: { exclude: ['id', 'balance'] },
      }],
      order: [
        ['createdAt', 'DESC']],
    });
    return findUsers as Transaction[];
  }

  async findUserDataTransactionDebited(
    id: number,
    startDate: string,
    endDate: string,
  ): Promise<Transaction[]> {
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
          model: Account,
          as: 'debiteAccount',
          attributes: { exclude: ['id', 'balance'] },
        }],
      order: [
        ['createdAt', 'DESC']],
    });
    return findUsers as Transaction[];
  }

  async findUserDataTransactionCredtid(
    id: number,
    startDate: string,
    endDate: string,
  ): Promise<Transaction[]> {
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
        model: Account,
        as: 'creditedAccount',
        attributes: { exclude: ['id', 'balance'] },
      }],
      order: [
        ['createdAt', 'ASC']],
    });
    return findUsers as Transaction[];
  }
}
