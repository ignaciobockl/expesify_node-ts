import dotenv from 'dotenv';

import { Sequelize } from 'sequelize';

// Config Environment variables
dotenv.config();

const DATABASE: string = process.env.DATABASE_PG || '';
const HOST: string = process.env.HOST_PG || '';
const PASSWORD: string = process.env.PASSWORD_PG || '';
const USERNAME: string = process.env.USERNAME_PG || '';

export const sequelizeConnection = new Sequelize({
  database: DATABASE,
  dialect: 'postgres',
  models: [__dirname + './models'],
  password: PASSWORD,
  storage: ':memory:',
  username: USERNAME,
});

