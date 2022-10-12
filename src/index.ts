import dotenv from 'dotenv';

import { app } from './app';

import { sequelizeConnection } from './database/configDatabase';

// Config Environment variables
dotenv.config();

const PORT: number = (process.env.PORT && parseInt(process.env.PORT)) || 8001;

const main = async () => {

  // Config Database
  try {
    await sequelizeConnection.authenticate();
    console.log('Conexion Postgres OK');
    app.listen(() => console.log(`Server run on port ${PORT}`));
  } catch (error) {
    console.log('Error al intentar realizar la conexion con la DB.', error);
  }
};

main();
