import * as bcrypt from 'bcryptjs';
import { IModel, Iservice } from '../interfaces/RegisterInterface';

export default class RegisterService implements Iservice {
  constructor(private model: IModel) {
    this.model = model;
  }

  async createUser(user: string, password: string):Promise<boolean> {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const passwordHash = await bcrypt.hash(password, salt);
    await this.model.createUser(user, passwordHash);
    return true;
  }
}
