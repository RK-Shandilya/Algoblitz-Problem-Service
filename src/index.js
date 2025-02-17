import express from 'express'
import  config  from './config/server.config.js'

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.text());

app.get('/ping', (req, res)=> {
    return res.json({message: 'Problem Service is alive'})
})

app.listen(config.PORT, () => {
    console.log(`Server is listening at ${config.PORT}`)
})