import express from 'express'
import dotenv from 'dotenv'
import { connectToDatabase } from './lib/dbConnection'
import bodyParser from 'body-parser'

async function start() {
  // load env var

  dotenv.config({
    path: "./.env.local"
  })

  // route async imports
  const operatorRouter = await import('./routes/operator.ts')


  // connect to database
  
  await connectToDatabase();

  // start express server

  
  const app = express()

  app.use(bodyParser.json())

  // Routes

  app.use('/operator', operatorRouter.default)

  app.listen(process.env.HTTP_PORT, () => {
    console.log('Server is running on  port ' + process.env.HTTP_PORT)
  })
}

start()