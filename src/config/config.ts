import dotenv from 'dotenv';

dotenv.config();

export const configDB = {
  development: {
    username: process.env.USERNAME_PG || '',
    password: process.env.PASSWORD_PG || '',
    database: process.env.DATABASE_PG || '',
    host: process.env.HOST_PG || '',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: '',
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    username: 'root',
    password: '',
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
};
