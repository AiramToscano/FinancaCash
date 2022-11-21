"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidatorLogin {
    constructor(service) {
        this.service = service;
        this.validPassword = async (req, res, next) => {
            const { username, password } = req.body;
            if (!password || password.length < 8) {
                return res.status(400).json({ message: 'All fields must be filled' });
            }
            const user = await this.service.findUser(username, password);
            if (!user)
                return res.status(401).json({ message: 'Incorrect username or password' });
            next();
        };
        this.service = service;
    }
}
exports.default = ValidatorLogin;
//# sourceMappingURL=ValidatorLogin.js.map