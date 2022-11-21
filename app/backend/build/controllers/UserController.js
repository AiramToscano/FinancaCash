"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    constructor(service) {
        this.service = service;
        this.UserBalance = async (req, res) => {
            const { id } = req.body;
            const userBalance = await this.service.findeUserBalance(id);
            return res.status(200).json({ userBalance });
        };
        this.UserTransaction = async (req, res) => {
            const { iddebited, usercredited, value } = req.body;
            await this.service.userTransaction(iddebited, usercredited, value);
            return res.status(200).end();
        };
        this.UsersTransactionAll = async (req, res) => {
            const { id } = req.body;
            const users = await this.service.findUserTransactionAll(id);
            return res.status(200).json({ users });
        };
        this.UsersTransactionDebitedCredited = async (req, res) => {
            const { id, debiteOrCredite } = req.body;
            const users = await this.service.filterUserDebiteOrCredite(id, debiteOrCredite);
            return res.status(200).json({ users });
        };
        this.UsersTransactionData = async (req, res) => {
            const { id, startDate } = req.body;
            const users = await this.service.findUserTransactionData(id, startDate);
            return res.status(200).json(users);
        };
        this.UsersTransactionDataDebitedCredited = async (req, res) => {
            const { id, startDate, debiteOrCredite } = req.body;
            const users = await this.service.filterUserDebiteOrCrediteData(id, startDate, debiteOrCredite);
            return res.status(200).json(users);
        };
        this.service = service;
    }
}
exports.default = LoginController;
//# sourceMappingURL=UserController.js.map