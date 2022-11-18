import { Router } from 'express';
import RegisterController from '../controllers/RegisterController';
import Registerservices from '../services/RegisterService';
import RegisterRepository from '../repository/RegisterRepository';
import ValidatorRegister from '../utils/ValidatorRegister';
// import CreateJWT from '../utils/CreateJwt';

const RegisterRoute = Router();
const RegisterValidator = new ValidatorRegister(new RegisterRepository());
const registerController = new RegisterController(
  new Registerservices(new RegisterRepository()),
);

RegisterRoute.post(
  '/register',
  RegisterValidator.validUser,
  RegisterValidator.validPassword,
  registerController.RegisterUser,
);

export default RegisterRoute;
