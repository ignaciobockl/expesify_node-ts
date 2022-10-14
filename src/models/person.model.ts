import { Model, UUIDV4 } from 'sequelize';

interface PersonAttributes {
  personId: string;
  name: string;
  email?: string;
  dni: number;
  birthDate: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Person extends Model<PersonAttributes> implements PersonAttributes {
    personId!: string;
    name!: string;
    email?: string;
    dni!: number;
    birthDate!: Date;
    static associate(models: any) {
        // Uno a Uno
        Person.hasOne(models.User);
    }
  }
  Person.init(
    {
      personId: {
        allowNull: false,
        defaultValue: UUIDV4,
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
      },
      dni: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      birthDate: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: 'Person',
    }
  );
  return Person;
};
