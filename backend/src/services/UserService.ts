import { IModel, Iservice } from '../interfaces/UsersInterface';

export default class UserService implements Iservice {
  constructor(private model: IModel) {
    this.model = model;
  }

  async findeUserBalance(id: number):Promise<object> {
    const user = await this.model.findUserBalance(id);
    return user.dataValues.idaccount;
  }
}
