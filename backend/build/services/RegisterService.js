"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RegisterService {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    async createUser(email, password) {
        const listUser = await this.model.createAccount();
        return true;
        // const validPassword = bcrypt.compareSync(password, listUser.password);
    }
}
exports.default = RegisterService;
//# sourceMappingURL=RegisterService.js.map