import { Router } from 'express';
import UserController from '../controllers/UserController';
import Userservices from '../services/UserService';
import UserRepository from '../repository/Usersrepository';
import LoginValidade from '../utils/ValidadeToken';
import transactionsValidade from '../utils/ValidatorTransactions';
import LoginRepository from '../repository/Loginrepository';
import CreateJWT from '../utils/createJwt';

const UserRoute = Router();
const UserControllerBalance = new UserController(
  new Userservices(new UserRepository()),
);

const transactions = new transactionsValidade(new UserRepository());
const uservalidade = new LoginValidade(new CreateJWT(new LoginRepository()));

UserRoute.post(
  '/balance',
  uservalidade.AuthToken,
  UserControllerBalance.UserBalance,
);

UserRoute.post(
  '/transactions',
  transactions.validTransactionsUsers,
  transactions.validTransactionsBalance,
  UserControllerBalance.UserTransaction,
)

export default UserRoute;
