import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import Loginservices from '../services/LoginService';
import LoginRepository from '../repository/Loginrepository';
import ValidatorLogin from '../utils/ValidatorLogin';
import CreateJWT from '../utils/createJwt';

const LoginRoute = Router();
const LoginValidade = new ValidatorLogin(new Loginservices(new LoginRepository()));
const Logincontroller = new LoginController(
  new Loginservices(new LoginRepository()),
  new CreateJWT(new LoginRepository()),
);

LoginRoute.post(
  '/login',
  LoginValidade.validPassword,
  Logincontroller.AuthUser,
);
LoginRoute.get('/login/:validate', Logincontroller.AuthToken);

export default LoginRoute;
