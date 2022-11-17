"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoginController {
    constructor(service) {
        this.service = service;
        this.RegisterUser = async (req, res) => {
            const { username, password } = req.body;
            const createjwt = await this.service.createUser(username, password);
            return res.status(200).json({ resposta: 'deu certo' });
        };
        this.service = service;
    }
}
exports.default = LoginController;
//# sourceMappingURL=RegisterController.js.map