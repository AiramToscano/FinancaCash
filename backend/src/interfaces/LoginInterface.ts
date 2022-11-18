import { JwtPayload } from 'jsonwebtoken';
import Users from '../database/models/Users';

export interface IModel {
  findOne(username: string):Promise<Users>
}

export interface Iservice {
  findUser(username: string, password: string):Promise<object | boolean>
}

export interface Ijwt {
  createJwt(username: string):Promise<string>
  validJwt(token: string | undefined):Promise<string | boolean>
}

export interface JwtPayloadHandler extends JwtPayload {
  name: string;
}
