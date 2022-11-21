import Account from '../database/models/Account';
import Users from '../database/models/Users';
import { IModel } from '../interfaces/RegisterInterface';

export default class RegisterRepository implements IModel {
  constructor(private model = Account, private model2 = Users) {
    this.model = model;
  }

  async createUser(username: string, password: string):Promise<Users | boolean> {
    const accountid = await this.createAccount();
    if (accountid) {
      const createUser = await this.model2.create({ username, password, accountid });
      return createUser as Users;
    }
    return false;
  }

  async createAccount():Promise<Account> {
    const createAccount = await this.model.create({ balance: 100 });
    return createAccount.dataValues.id;
  }

  async findUser(username: string):Promise<Users> {
    const FindUser = await this.model2.findOne({ where: { username } });
    return FindUser as Users;
  }
}
