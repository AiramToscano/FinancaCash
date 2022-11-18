import Users from '../database/models/Users';

export interface IModel {
  findUserBalance(id: number):Promise<Users>
}

export interface Iservice {
  findeUserBalance(id: number):Promise<object>
}
