"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RegisterController_1 = require("../controllers/RegisterController");
const RegisterService_1 = require("../services/RegisterService");
const RegisterRepository_1 = require("../repository/RegisterRepository");
const ValidatorRegister_1 = require("../utils/ValidatorRegister");
// import CreateJWT from '../utils/CreateJwt';
const RegisterRoute = (0, express_1.Router)();
const RegisterValidator = new ValidatorRegister_1.default(new RegisterRepository_1.default());
const registerController = new RegisterController_1.default(new RegisterService_1.default(new RegisterRepository_1.default()));
RegisterRoute.post('/register', RegisterValidator.validUser, RegisterValidator.validPassword, registerController.RegisterUser);
exports.default = RegisterRoute;
//# sourceMappingURL=RegisterRoute.js.map