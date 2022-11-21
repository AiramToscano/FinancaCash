"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
class RegisterService {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    async createUser(user, password) {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const passwordHash = await bcrypt.hash(password, salt);
        await this.model.createUser(user, passwordHash);
        return true;
    }
}
exports.default = RegisterService;
//# sourceMappingURL=RegisterService.js.map