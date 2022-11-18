import { Router } from 'express';
import UserController from '../controllers/UserController';
import Userservices from '../services/UserService';
import UserRepository from '../repository/Usersrepository';
import LoginValidade from '../utils/ValidadeToken';
import LoginRepository from '../repository/Loginrepository';
import CreateJWT from '../utils/createJwt';

const UserRoute = Router();
const UserControllerBalance = new UserController(
  new Userservices(new UserRepository()),
);

const uservalidade = new LoginValidade(new CreateJWT(new LoginRepository()));

UserRoute.post(
  '/balance',
  uservalidade.AuthToken,
  UserControllerBalance.UserBalance,
);

export default UserRoute;
