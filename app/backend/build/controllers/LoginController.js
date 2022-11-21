"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    constructor(service, jwt) {
        this.service = service;
        this.jwt = jwt;
        this.AuthUser = async (req, res) => {
            try {
                const { username, password } = req.body;
                const createjwt = await this.jwt.createJwt(username);
                const user = await this.service.findUser(username, password);
                return res.status(200).json({ user, token: createjwt });
            }
            catch (err) {
                return res.status(500).json({ error: err });
            }
        };
        this.AuthToken = async (req, res) => {
            try {
                const { authorization } = req.headers;
                const user = await this.jwt.validJwt(authorization);
                if (!user)
                    return res.status(400).json({ message: 'Token expired or invalid' });
                return res.status(200).json({ role: user });
            }
            catch (err) {
                return res.status(500).json({ error: err });
            }
        };
        this.service = service;
    }
}
exports.default = LoginController;
//# sourceMappingURL=LoginController.js.map