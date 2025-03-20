import express from 'express'
import  config  from './config/server.config.js'
import apiRouter from './routes/index.js';
import { errorHandler } from './utils/errorHandler.js';
import dbConnect from './config/db.config.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());
app.use(cors());

app.use('/api', apiRouter);

app.get('/ping', (req, res)=> {
    return res.json({message: 'Problem Service is alive'})
})

app.use(errorHandler);

app.listen(config.PORT, async() => {
    console.log(`Server is listening at ${config.PORT}`);
    await dbConnect();
    console.log("Database connected");
})