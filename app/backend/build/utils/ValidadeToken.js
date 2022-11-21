"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidadeToken {
    constructor(jwt) {
        this.jwt = jwt;
        this.AuthToken = async (req, res, next) => {
            const { authorization } = req.headers;
            if (!authorization)
                return res.status(400).json({ message: 'Token expired or invalid' });
            const user = await this.jwt.validJwt(authorization);
            if (!user)
                return res.status(400).json({ message: 'Token expired or invalid' });
            next();
        };
    }
}
exports.default = ValidadeToken;
//# sourceMappingURL=ValidadeToken.js.map