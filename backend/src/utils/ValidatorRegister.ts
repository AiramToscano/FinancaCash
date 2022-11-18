import { NextFunction, Response, Request } from 'express';
import { IModel } from '../interfaces/RegisterInterface';

export default class ValidatorRegister {
  constructor(private model: IModel) {
    this.model = model;
  }

  validUser = async (req: Request, res: Response, next: NextFunction) => {
    const { username } = req.body;
    if (!username || username.length < 3) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const findUser = await this.model.findUser(username);
    if (findUser != null) return res.status(400).json({ err: 'Usuario ja cadastrado' });
    next();
  };

  validPassword = async (req: Request, res: Response, next: NextFunction) => {
    const { password } = req.body;
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
    const senha = regex.test(password);
    if (!senha) {
      return res.status(400).json({ message: 'password invalid' });
    }
    next();
  };
}
