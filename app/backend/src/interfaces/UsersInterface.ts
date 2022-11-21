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
  findUserTransactionDebited(id: number):Promise<Transaction[]>
  findUserTransactionCredited(id: number):Promise<Transaction[]>
  findUserAllTransaction(id: number):Promise<Transaction[]>
  findUserDataTransaction(id: number, startDate: string, endDate: string): Promise<Transaction[]>
  findUserDataTransactionDebited(id: number, startDate: string, endDate: string): Promise<Transaction[]>
  findUserDataTransactionCredtid(id: number, startDate: string, endDate: string): Promise<Transaction[]>
}

export interface Iservice {
  findeUserBalance(id: number):Promise<object | number>
  findUserCredited(username: string):Promise<object>
  userBalanceDebited(id: number, value:number):Promise<number>
  userBalanceCredited(Credname: string, value:number):Promise<number>
  userTransaction(id: number, Credname: string, value:number):Promise<boolean>
  userTransactionCreate(iddebited: number, idcreated: number, value:number):Promise<boolean>
  findUserTransactionDebited(id: number):Promise<Array<object>>
  findUserTransactionData(id: number, startDate: string):Promise<Array<object>>
  findUserTransactionCredited(id: number):Promise<Array<object>>
  findUserTransactionAll(id: number):Promise<Array<object>>
  filterUserDebiteOrCredite(id: number, debiteOrCredite: string):Promise<Array<object>>
  filterUserDebiteOrCrediteData(
    id: number, startDate: string, debiteOrCredite: string):Promise<Array<object>>
}
