"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("../database/models/Account");
const Users_1 = require("../database/models/Users");
class RegisterRepository {
    constructor(model = Account_1.default, model2 = Users_1.default) {
        this.model = model;
        this.model2 = model2;
        this.model = model;
    }
    async createUser(username, password) {
        const accountid = await this.createAccount();
        if (accountid) {
            const createUser = await this.model2.create({ username, password, accountid });
            return createUser;
        }
        return false;
    }
    async createAccount() {
        const createAccount = await this.model.create({ balance: 100 });
        return createAccount.dataValues.id;
    }
    async findUser(username) {
        const FindUser = await this.model2.findOne({ where: { username } });
        return FindUser;
    }
}
exports.default = RegisterRepository;
//# sourceMappingURL=RegisterRepository.js.map