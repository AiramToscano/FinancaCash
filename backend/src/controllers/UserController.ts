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
    return res.status(200).end();
  };
}
