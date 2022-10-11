import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();
const PORT: number = (process.env.PORT && parseInt(process.env.PORT)) || 8001;
console.log(process.env);
const app = express();

app.use(cors());

app.listen(() => console.log(`Server run on port ${PORT}`));