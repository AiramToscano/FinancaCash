import { Request, Response } from 'express';
import { Iservice } from '../interfaces/UsersInterface';

export default class LoginController {
  constructor(private service: Iservice) {
    this.service = service;
  }

  public UserBalance = async (req: Request, res: Response): Promise<object> => {
    const { id } = req.body;
    const userBalance = await this.service.findeUserBalance(id);
    return res.status(200).json({ userBalance });
  };

  public UserTransaction = async (req: Request, res: Response): Promise<object> => {
    const { iddebited, usercredited, value } = req.body;
    await this.service.userTransaction(iddebited, usercredited, value);
    return res.status(200).end();
  };

  public UsersTransactionAll = async (req: Request, res: Response): Promise<object> => {
    const { id } = req.body;
    const users = await this.service.findUserTransactionAll(id);
    return res.status(200).json({ users });
  };

  public UsersTransactionDebitedCredited = async (req: Request, res: Response): Promise<object> => {
    const { id, debiteOrCredite } = req.body;
    const users = await this.service.filterUserDebiteOrCredite(id, debiteOrCredite);
    return res.status(200).json({ users });
  };

  public UsersTransactionData = async (req: Request, res: Response): Promise<object> => {
    const { id, startDate } = req.body;
    const users = await this.service.findUserTransactionData(id, startDate);
    return res.status(200).json(users);
  };

  public UsersTransactionDataDebitedCredited = async (req: Request, res: Response): Promise<object> => {
    const { id, startDate, debiteOrCredite } = req.body;
    const users = await this.service.filterUserDebiteOrCrediteData(id, startDate, debiteOrCredite);
    return res.status(200).json(users);
  };
}
