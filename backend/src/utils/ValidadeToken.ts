import { NextFunction, Request, Response } from 'express';
import { Ijwt } from '../interfaces/LoginInterface';

export default class LoginController {
  constructor(private jwt: Ijwt) {
  }

  public AuthToken = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).json({ message: 'Token expired or invalid' });
    const user = await this.jwt.validJwt(authorization);
    if (!user) return res.status(400).json({ message: 'Token expired or invalid' });
    next();
  };
}
