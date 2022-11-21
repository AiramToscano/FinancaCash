"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidatorTransactions {
    constructor(model) {
        this.model = model;
        this.validTransactionsUsers = async (req, res, next) => {
            const { iddebited, usercredited, value } = req.body;
            if (!iddebited || !usercredited || !value) {
                return res.status(400).json({ message: 'fields is required' });
            }
            const user = await this.model.findOne(usercredited);
            if (!user)
                return res.status(401).json({ message: 'Incorrect username' });
            if (iddebited === user.id) {
                return res.status(400).json({ message: 'operation is not authorized' });
            }
            next();
        };
        this.validTransactionsBalance = async (req, res, next) => {
            const { iddebited, value } = req.body;
            const user = await this.model.findUserBalance(iddebited);
            const { balance } = user.dataValues.idaccount.dataValues;
            if (value > balance || value < 0) {
                return res.status(400).json({ message: 'operation is not authorized' });
            }
            next();
        };
        this.validTransactionsDate = async (req, res, next) => {
            const { startDate } = req.body;
            const patternData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
            const teste = patternData.test(startDate);
            if (!teste)
                return res.status(400).json({ message: 'data invalid format' });
            next();
        };
        this.model = model;
    }
}
exports.default = ValidatorTransactions;
//# sourceMappingURL=ValidatorTransactions.js.map