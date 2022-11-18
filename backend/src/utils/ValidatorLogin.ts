import { NextFunction, Response, Request } from 'express';
import { Iservice } from '../interfaces/LoginInterface';

export default class ValidatorLogin {
  constructor(private service: Iservice) {
    this.service = service;
  }

  validPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;
    if (!password || password.length < 8) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const user = await this.service.findUser(username, password);
    if (!user) return res.status(401).json({ message: 'Incorrect username or password' });
    next();
  };
}
