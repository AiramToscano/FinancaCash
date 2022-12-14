import { Router } from 'express';
import UserController from '../controllers/UserController';
import Userservices from '../services/UserService';
import UserRepository from '../repository/Usersrepository';
import LoginValidade from '../utils/ValidadeToken';
import TransactionsValidade from '../utils/ValidatorTransactions';
import LoginRepository from '../repository/Loginrepository';
import CreateJWT from '../utils/createJwt';

const UserRoute = Router();
const UserControllerBalance = new UserController(
  new Userservices(new UserRepository()),
);

const transactions = new TransactionsValidade(new UserRepository());
const uservalidade = new LoginValidade(new CreateJWT(new LoginRepository()));

UserRoute.post(
  '/balance',
  uservalidade.AuthToken,
  UserControllerBalance.UserBalance,
);

UserRoute.post(
  '/transactions/all',
  uservalidade.AuthToken,
  UserControllerBalance.UsersTransactionAll,
);

UserRoute.post(
  '/transactions/debitedorcredited',
  uservalidade.AuthToken,
  UserControllerBalance.UsersTransactionDebitedCredited,
);

UserRoute.post(
  '/transactions/data',
  uservalidade.AuthToken,
  transactions.validTransactionsDate,
  UserControllerBalance.UsersTransactionData,
);

UserRoute.post(
  '/transactions/datadebitedcredited',
  uservalidade.AuthToken,
  transactions.validTransactionsDate,
  UserControllerBalance.UsersTransactionDataDebitedCredited,
);

UserRoute.post(
  '/transactions',
  uservalidade.AuthToken,
  transactions.validTransactionsUsers,
  transactions.validTransactionsBalance,
  UserControllerBalance.UserTransaction,
);

export default UserRoute;
