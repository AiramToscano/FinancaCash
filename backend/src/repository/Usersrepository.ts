import Users from '../database/models/Users';
import Account from '../database/models/Account';
import { IModel } from '../interfaces/UsersInterface';

export default class UsersRepository implements IModel {
  constructor(private model = Users) {
    this.model = model;
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
}
