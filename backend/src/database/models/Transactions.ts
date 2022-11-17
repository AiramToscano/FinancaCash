import { Model, INTEGER, DATE } from 'sequelize';
import db from '.';
import Account from './Account';

class Transaction extends Model {
  id!: number;
  value!: number;
  createdAt!: Date;
  debiteAccountId!: number;
  creditedAccountId!: number;
}

Transaction.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: INTEGER,
  },
  createdAt: {
    type: DATE,
  },
  debiteAccountId: {
    type: INTEGER,
  },
  creditedAccountId: {
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'transactions',
  underscored: true,
  timestamps: false });

  Transaction.belongsTo(Account, { foreignKey: 'debiteAccountId', as: 'debiteAccount' });
  Transaction.belongsTo(Account, { foreignKey: 'creditedAccountId', as: 'creditedAccount' });

export default Transaction;