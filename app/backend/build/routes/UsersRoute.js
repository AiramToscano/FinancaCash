"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const UserService_1 = require("../services/UserService");
const Usersrepository_1 = require("../repository/Usersrepository");
const ValidadeToken_1 = require("../utils/ValidadeToken");
const ValidatorTransactions_1 = require("../utils/ValidatorTransactions");
const Loginrepository_1 = require("../repository/Loginrepository");
const createJwt_1 = require("../utils/createJwt");
const UserRoute = (0, express_1.Router)();
const UserControllerBalance = new UserController_1.default(new UserService_1.default(new Usersrepository_1.default()));
const transactions = new ValidatorTransactions_1.default(new Usersrepository_1.default());
const uservalidade = new ValidadeToken_1.default(new createJwt_1.default(new Loginrepository_1.default()));
UserRoute.post('/balance', uservalidade.AuthToken, UserControllerBalance.UserBalance);
UserRoute.post('/transactions/all', uservalidade.AuthToken, UserControllerBalance.UsersTransactionAll);
UserRoute.post('/transactions/debitedorcredited', uservalidade.AuthToken, UserControllerBalance.UsersTransactionDebitedCredited);
UserRoute.post('/transactions/data', uservalidade.AuthToken, transactions.validTransactionsDate, UserControllerBalance.UsersTransactionData);
UserRoute.post('/transactions/datadebitedcredited', uservalidade.AuthToken, transactions.validTransactionsDate, UserControllerBalance.UsersTransactionDataDebitedCredited);
UserRoute.post('/transactions', uservalidade.AuthToken, transactions.validTransactionsUsers, transactions.validTransactionsBalance, UserControllerBalance.UserTransaction);
exports.default = UserRoute;
//# sourceMappingURL=UsersRoute.js.map