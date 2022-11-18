import Users from '../database/models/Users';
import { IModel } from '../interfaces/LoginInterface';

export default class LoginRepository implements IModel {
  constructor(private model = Users) {
    this.model = model;
  }

  async findOne(username: string):Promise<Users> {
    const listUser = await this.model.findOne({ where: { username } });
    return listUser as Users;
  }
}
