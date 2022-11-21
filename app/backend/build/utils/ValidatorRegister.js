"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidatorRegister {
    constructor(model) {
        this.model = model;
        this.validUser = async (req, res, next) => {
            const { username } = req.body;
            if (!username || username.length < 3) {
                return res.status(400).json({ message: 'All fields must be filled' });
            }
            const findUser = await this.model.findUser(username);
            if (findUser != null)
                return res.status(400).json({ err: 'Usuario ja cadastrado' });
            next();
        };
        this.validPassword = async (req, res, next) => {
            const { password } = req.body;
            const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
            const senha = regex.test(password);
            if (!senha) {
                return res.status(400).json({ message: 'password invalid' });
            }
            next();
        };
        this.model = model;
    }
}
exports.default = ValidatorRegister;
//# sourceMappingURL=ValidatorRegister.js.map