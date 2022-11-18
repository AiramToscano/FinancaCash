import moment = require('moment');
import { IModel, Iservice } from '../interfaces/UsersInterface';

export default class UserService implements Iservice {
  constructor(private model: IModel) {
    this.model = model;
  }

  async findeUserBalance(id: number):Promise<object | number> {
    const user = await this.model.findUserBalance(id);
    return user.dataValues.idaccount.dataValues.balance;
  }

  async findUserCredited(username: string):Promise<object> {
    const user = await this.model.findOne(username);
    return user.dataValues.id;
  }

  async findUserIdAccont(id: number):Promise<object> {
    const user = await this.model.findOneByPk(id);
    return user.dataValues.accountid;
  }

  async userBalanceDebited(id: number, value: number):Promise<number> {
    const userBalanceDebited = await this.findeUserBalance(id);
    const valueFinal = Number(userBalanceDebited) - value;
    return valueFinal;
  }

  async userBalanceCredited(Credname: string, value: number):Promise<number> {
    const userCreditedId = await this.findUserCredited(Credname);
    const userBalanceCredited = await this.findeUserBalance(Number(userCreditedId));
    const valueFinal = Number(userBalanceCredited) + value;
    return valueFinal;
  }

  async userTransactionCreate(value: number, iddebited: number, idcreated:number):Promise<boolean> {
    await this.model.createTransaction(value, iddebited, idcreated);
    return true;
  }

  async userTransactionUpdateBalance(id: number, balance: number):Promise<boolean> {
    await this.model.updateBalance(id, balance);
    return true;
  }

  async userTransaction(id: number, credname: string, value:number):Promise<boolean> {
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

  async findUserTransactionData(id: number, startDate: string):Promise<Array<object>> {
    const data = moment(startDate, 'DD/MM/YYYY');
    const dataFormat = data.format('YYYY-MM-DD');
    const users = await this.model.findUserDataTransaction(id, dataFormat, dataFormat);
    return users;
  }

  async findUserTransactionDebited(id: number):Promise<Array<object>> {
    const Users = await this.model.findUserTransactionDebited(id);
    return Users;
  }

  async findUserTransactionCredited(id: number):Promise<Array<object>> {
    const Users = await this.model.findUserTransactionCredited(id);
    return Users;
  }

  async findUserTransactionAll(id: number):Promise<Array<object>> {
    const Users = await this.model.findUserAllTransaction(id);
    return Users;
  }
}
