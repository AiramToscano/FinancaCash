"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegisterController_1 = require("../controllers/RegisterController");
const RegisterService_1 = require("../services/RegisterService");
const RegisterRepository_1 = require("../repository/RegisterRepository");
// import ValidatorLogin from '../utils/ValidatorLogin';
// import CreateJWT from '../utils/CreateJwt';
const RegisterRoute = (0, express_1.Router)();
// const LoginValidade = new ValidatorLogin(new Registerservices(new RegisterRepository()));
const registerController = new RegisterController_1.default(new RegisterService_1.default(new RegisterRepository_1.default()));
RegisterRoute.post('/register', registerController.RegisterUser);
exports.default = RegisterRoute;
//# sourceMappingURL=RegisterRoute.js.map