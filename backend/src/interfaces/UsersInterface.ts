import Users from '../database/models/Users';
import Transaction from '../database/models/Transactions';

export interface IModel {
  findUserBalance(id: number):Promise<Users>
  findOne(username: string):Promise<Users>
  createTransaction
  (
    value: number,
    debiteAccountId: number,
    creditedAccountId: number
  )
  : Promise<Transaction>
  updateBalance(id: number, balance: number):Promise<boolean>
  findOneByPk(id: number):Promise<Users>
}

export interface Iservice {
  findeUserBalance(id: number):Promise<object | number>
  findUserCredited(username: string):Promise<object>
  userBalanceDebited(id: number, value:number):Promise<number>
  userBalanceCredited(Credname: string, value:number):Promise<number>
  userTransaction(id: number, Credname: string, value:number):Promise<boolean>
  userTransactionCreate(iddebited: number, idcreated: number, value:number):Promise<boolean>
}
