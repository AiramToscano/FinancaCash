import * as bcrypt from 'bcryptjs';
import { IModel, Iservice } from '../interfaces/LoginInterface';

export default class LoginService implements Iservice {
  constructor(private model: IModel) {
    this.model = model;
  }

  async findUser(username: string, password: string):Promise<object | boolean> {
    const listUser = await this.model.findOne(username);
    if (listUser === null) return false;
    const validPassword = bcrypt.compareSync(password, listUser.password);
    if (!validPassword) return false;
    const obj = {
      id: listUser.dataValues.id,
      username: listUser.dataValues.username,
      accountId: listUser.dataValues.accountid,
    };
    return obj;
  }
}
