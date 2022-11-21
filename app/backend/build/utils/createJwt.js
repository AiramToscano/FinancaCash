"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
class CreateJWT {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    async createJwt(username) {
        const listUser = await this.model.findOne(username);
        const secret = String(process.env.JWT_SECRET);
        const signInOptions = {
            algorithm: 'HS256',
            expiresIn: '24h',
        };
        const payload = {
            name: listUser.dataValues.username,
        };
        return (0, jsonwebtoken_1.sign)(payload, secret, signInOptions);
    }
    async validJwt(token) {
        const validToken = (0, jsonwebtoken_1.decode)(token);
        if (validToken != null) {
            const { name } = validToken;
            const listUser = await this.model.findOne(name);
            if (listUser != null) {
                return listUser.dataValues.username;
            }
            return false;
        }
        return false;
    }
}
exports.default = CreateJWT;
//# sourceMappingURL=createJwt.js.map