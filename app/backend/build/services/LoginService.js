"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
class LoginService {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    async findUser(username, password) {
        const listUser = await this.model.findOne(username);
        if (listUser === null)
            return false;
        const validPassword = bcrypt.compareSync(password, listUser.password);
        if (!validPassword)
            return false;
        const obj = {
            id: listUser.dataValues.id,
            username: listUser.dataValues.username,
            accountId: listUser.dataValues.accountid,
        };
        return obj;
    }
}
exports.default = LoginService;
//# sourceMappingURL=LoginService.js.map