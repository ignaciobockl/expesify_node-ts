import { Sequelize } from 'sequelize';

import { configDB } from '../config/config';

import fs from 'fs';
import path from 'path';
const basename: string = path.basename(__filename);
const env: string = process.env.NODE_ENV || 'development';
const db: any = {};
const typeOfEnv = env as keyof typeof configDB;

const sequelize = new Sequelize(
  configDB[typeOfEnv].database,
  configDB[typeOfEnv].username,
  configDB[typeOfEnv].password,
  {
    host: (configDB[typeOfEnv].host && configDB[typeOfEnv].host) || '',
  }
);

fs.readdirSync(__dirname)
  .filter((file: string) => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts'
    );
  })
  .forEach((file: any) => {
    const model: any = import(path.join(__dirname, file))
    .then(
      () => 
        sequelize,
      Sequelize.DataType
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
