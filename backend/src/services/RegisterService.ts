import { Md5 } from 'md5-typescript';
import { IModel, Iservice } from '../interfaces/RegisterInterface';

export default class RegisterService implements Iservice {
  constructor(private model: IModel) {
    this.model = model;
  }

  async createUser(user: string, password: string):Promise<boolean> {
    const passwordHash = Md5.init(password);
    await this.model.createUser(user, passwordHash);
    return true;
  }
}
