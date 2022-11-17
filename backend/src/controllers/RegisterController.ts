import { Request, Response } from 'express';
import { Iservice } from '../interfaces/RegisterInterface';

export default class LoginController {
  constructor(private service: Iservice) {
    this.service = service;
  }

  public RegisterUser = async (req: Request, res: Response): Promise<object> => {
    const { username, password } = req.body;
    await this.service.createUser(username, password);
    return res.status(200).end();
  };
}
