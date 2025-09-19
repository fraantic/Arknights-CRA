import express from 'express'
import dotenv from 'dotenv'
import { connectToDatabase } from './lib/dbConnection'
import Operator from './models/characters'
import { OperatorBranch, OperatorClass, OperatorGender, OperatorPosition, OperatorSource, OperatorStatus, OperatorTags } from './enums/operators'
import { WorldFactions, WorldNations, WorldRaces } from './enums/world'

async function start() {
  // load env var

  dotenv.config({
    path: "./.env.local"
  })

  // connect to database
  
  await connectToDatabase();

  // start express server

  const app = express()

  app.get('/', (req,res) => {
    res.send("Hello world")
  })

  app.listen(process.env.HTTP_PORT, () => {
    console.log('Server is running on  port ' + process.env.HTTP_PORT)
  })
}

start()