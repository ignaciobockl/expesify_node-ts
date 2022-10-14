import db from './models';
import express from 'express';

const PORT: number = (process.env.PORT && parseInt(process.env.PORT)) || 8001;

const app = express();

db.sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server run on port: ${PORT}`));
});