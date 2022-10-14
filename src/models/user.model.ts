import { Model } from 'sequelize';

interface UserAttributes {
  userId: string;
  personId: string;
  password: string;
  incorporationDate: Date;
  currentPeriod: number;
  shouldSeeStatus: boolean;
  hasRequestedNewPassword: boolean;
  userActive: boolean;
  recCode: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes> implements UserAttributes {
    userId!: string;
    personId!: string;
    password!: string;
    incorporationDate!: Date;
    currentPeriod!: number;
    shouldSeeStatus!: boolean;
    hasRequestedNewPassword!: boolean;
    userActive!: boolean;
    recCode!: string;
    static associate(models: any) {
        User.hasOne(models.Person);
    }
  }
  User.init(
    {
      userId: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      personId: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      incorporationDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      currentPeriod: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      shouldSeeStatus: {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN,
      },
      hasRequestedNewPassword: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      userActive: {
        allowNull: false,
        defaultValue: true,
        type: DataTypes.BOOLEAN,
      },
      recCode: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
