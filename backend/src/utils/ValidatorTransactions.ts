import { NextFunction, Response, Request } from 'express';
import { IModel } from '../interfaces/UsersInterface';

export default class ValidatorTransactions {
  constructor(private model: IModel) {
    this.model = model;
  }

  validTransactionsUsers = async (req: Request, res: Response, next: NextFunction) => {
    const { iddebited, usercredited, value } = req.body;
    if (!iddebited || !usercredited || !value) {
      return res.status(400).json({ message: 'fields is required' });
    }
    const user = await this.model.findOne(usercredited);
    if (!user) return res.status(401).json({ message: 'Incorrect username' });
    if (iddebited === user.id) {
      return res.status(400).json({ message: 'operation is not authorized' });
    }
    next();
  };

  validTransactionsBalance = async (req: Request, res: Response, next: NextFunction) => {
    const { iddebited, value } = req.body;
    const user = await this.model.findUserBalance(iddebited);
    const { balance } = user.dataValues.idaccount.dataValues;
    if (value > balance || !Number.isInteger(value)) {
      return res.status(400).json({ message: 'operation is not authorized' });
    }
    next();
  };

  validTransactionsDate = async (req: Request, res: Response, next: NextFunction) => {
    const { startDate } = req.body;
    const patternData = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    const teste = patternData.test(startDate);
    if (!teste) return res.status(400).json({ message: 'data invalid format' });
    next();
  };
}
