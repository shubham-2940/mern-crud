import express from 'express'
import conn from './conn/conn.js';
import dotenv from 'dotenv'
import cors from 'cors'
import routers from './routes/routes.js';

dotenv.config()
const app = express()

//db
conn()

app.use(express.json());
app.use(cors())
app.use('/api', routers);

app.listen(process.env.PORT, () => {
    console.log('server is runnig');
})