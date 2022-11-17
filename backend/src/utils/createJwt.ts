import { sign, SignOptions, decode } from 'jsonwebtoken';
import { IModel, JwtPayloadHandler } from '../interfaces/LoginInterface';

export default class CreateJWT {
  constructor(private model: IModel) {
    this.model = model;
  }

  async createJwt(username: string) {
    const listUser = await this.model.findOne(username);
    const secret = String(process.env.JWT_SECRET);
    const signInOptions: SignOptions = {
      algorithm: 'HS256',
      expiresIn: '24h',
    };
    const payload = {
      name: listUser.dataValues.username,
    };
    return sign(payload, secret, signInOptions);
  }

  async validJwt(token: string) {
    const validToken = decode(token);
    if (validToken != null) {
      const { name } = validToken as JwtPayloadHandler;
      const listUser = await this.model.findOne(name);
      if (listUser != null) {
        return listUser.dataValues.username;
      }
      return false;
    }
    return false;
  }
}
