import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';
import Account from './Account';

class Users extends Model {
  id!: number;
  username!: string;
  password!: string;
  accountId!: number;
}

Users.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
  },
  password: {
    type: STRING,
  },
  accountId: {
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'users',
  underscored: true,
  timestamps: false });

  Users.belongsTo(Account, { foreignKey: 'accountId', as: 'accountId' });

export default Users;
