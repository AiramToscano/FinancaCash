"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Users_1 = require("../database/models/Users");
class LoginRepository {
    constructor(model = Users_1.default) {
        this.model = model;
        this.model = model;
    }
    async findOne(username) {
        const listUser = await this.model.findOne({ where: { username } });
        return listUser;
    }
}
exports.default = LoginRepository;
//# sourceMappingURL=Loginrepository.js.map