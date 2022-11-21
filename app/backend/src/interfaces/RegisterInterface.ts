import Users from '../database/models/Users';
import Account from '../database/models/Account';

export interface IModel {
  createUser(username: string, password: string):Promise<Users | boolean>
  createAccount():Promise<Account>
  findUser(username: string):Promise<Users>
}

export interface Iservice {
  createUser(email: string, password: string):Promise<void | boolean>
}
