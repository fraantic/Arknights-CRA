import express, { Request, Response } from 'express'
import { httpResponse } from '../lib/httpsResponse';
import Operator, { operatorZodSchema } from '../models/operator';
import { z } from 'zod';
const router = express.Router();

// post req for adding operators to the db
router.post('/post', async(req: Request & {
  body: {
    data: {
      name: string;
      internalName: string;
      epName: string;
      fileNumber: string;
    
      playableClass: number;
      branch: number;
      position: number;
    
      tags: number[];
      rarity: number;
      obtainable: number;
    
    
      loreInformation: {
        gender: number;
        race: number ;
        birthPlace: number;
        faction: number;
        aliveStatus: number;
        sarkazTribe: number;
        infected: boolean;
        height: number;
        age: string;
      }
    
      voiceActors: {
        japaneseVA: string;
        chineseVA: string;
        englishVA: string;
        koreanVA: string;
      }
    
      stats: {
        health: number;
        attack: number;
        defense: number;
        resistance: number;
        deploymentPoints: number;
        redeploymentTime: number;
        block: number;
        attackInterval: number;
      }
      
      skills: {
        skillName: string;
        skillEffect: string[];
        skillInitialSp: number[];
        skillSpCost: number[];
        skillActivationTime: number[];
      }
    
      otherSkills: {
        potentialEffects: string[];
        talentOneEffect: string;
        talentTwoEffect: string;
      }
    
      base: {
        baseSkillOne: string;
        baseSkillTwo: string;
      }
    }
  }
}, res: Response) => {
  try {

    // define variables
    const { data } = req.body
    const results = operatorZodSchema.safeParse(req.body);
    

    // validate types and if there are missing fields with zod
    if (!results.success) {
      const errorMessage = z.prettifyError(results.error!)
      return httpResponse(400, "Missing or invalid fields, ", {errorMessage}, res)
    }

    // create new operator
    const operator = new Operator({
      data
    })

    // save new operator to db
    await operator.save()

    // return a successful code
    return httpResponse(201, "Operator created successfully", {data}, res)

  } catch(error) {
    // :shrug: error happened
    return httpResponse(500, "Internal server error", {}, res)
  }
})

// get req for operators from the db
router.post('/get', async(req: Request & {
  // query parameters
  query: {
    name: string | null;
    internalName: string | null;
    epName: string | null;
    fileNumber: string | null;
    playableClass: number | null;
    branch: number | null;
    position: number | null;
    tags: number[] | null;
    rarity: number | null;
    obtainable: number | null;
    gender: number | null;
    race: number | null;
    birthPlace: number | null;
    faction: number | null;
    aliveStatus: number | null;
    sarkazTribe: number | null;
    infected: number | null;
    height: number | null;
    age: number | null;
    health: number | null;
    attack: number | null;
    defense: number | null;
    resistance: number | null;
    deploymentPoints: number | null;
    redeploymentTime: number | null;
    block: number | null;
    attackInterval: number | null;
    skillInitialSp: number[] | null;
    skillSpCost: number[] | null;
    skillActivationTime: number[] | null;
  }
}, res: Response) => {
  try {

    // define all search variables
    let {name = null, internalName = null, epName = null, fileNumber = null, playableClass = null,
        branch = null, position = null, tags = null, rarity = null, obtainable = null, gender = null,
        race = null, birthPlace = null, faction = null, aliveStatus = null, sarkazTribe = null,
        infected = null, height = null, age = null, block = null} = req.query

    

  } catch (error) {
    console.error("Error getting operator info", error);
    return httpResponse(500, "Internal server error", {}, res)
  }
})


export default router;