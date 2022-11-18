"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Account_1 = require("../database/models/Account");
class RegisterRepository {
    constructor(model = Account_1.default) {
        this.model = model;
        this.model = model;
    }
    //   async createUser(username: string, password: string):Promise<Users> {
    //     const createUser = await this.model.create({ username});
    //     return createUser as Users;
    //   }
    async createAccount() {
        const createAccount = await this.model.create({ balance: 100 });
        console.log(createAccount);
        return createAccount;
    }
}
exports.default = RegisterRepository;
//# sourceMappingURL=RegisterRepository.js.map