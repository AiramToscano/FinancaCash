"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LoginController_1 = require("../controllers/LoginController");
const LoginService_1 = require("../services/LoginService");
const Loginrepository_1 = require("../repository/Loginrepository");
const ValidatorLogin_1 = require("../utils/ValidatorLogin");
const createJwt_1 = require("../utils/createJwt");
const LoginRoute = (0, express_1.Router)();
const LoginValidade = new ValidatorLogin_1.default(new LoginService_1.default(new Loginrepository_1.default()));
const Logincontroller = new LoginController_1.default(new LoginService_1.default(new Loginrepository_1.default()), new createJwt_1.default(new Loginrepository_1.default()));
LoginRoute.post('/login', LoginValidade.validPassword, Logincontroller.AuthUser);
LoginRoute.get('/login/:validate', Logincontroller.AuthToken);
exports.default = LoginRoute;
//# sourceMappingURL=LoginRoute.js.map