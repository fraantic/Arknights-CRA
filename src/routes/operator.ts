import express, { Request, Response } from 'express'
import { httpResponse } from '../lib/httpsResponse';
import Operator, { operatorZodSchema } from '../models/operator';
import { z } from 'zod';
const router = express.Router();


router.post('/add', async(req: Request & {
  body: {
    data: {
      name: string;
      internalName: string;
      epName: string;
      fileNumber: string;
    
      class: number;
      branch: number;
      position: number;
    
      tags: Array<number>;
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
        skillOneName: string;
        skillOneEffect: string[];
        skillOneInitialSp: number[];
        skillOneSpCost: number[];
        skillOneActivationTime: number[];
    
        skillTwoName: string;
        skillTwoEffect: string[];
        skillTwoInitialSp: number[];
        skillTwoSpCost: number[];
        skillTwoActivationTime: number[];
    
        skillThreeName: string;
        skillThreeEffect: string[]; 
        skillThreeInitialSp: number[];
        skillThreeSpCost: number[];
        skillThreeActivationTime: number[];
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

    const { data } = req.body
    const results = operatorZodSchema.safeParse(req.body);
    

    if (!results.success) {
      const errorMessage = z.prettifyError(results.error!)
      return httpResponse(400, "Missing or invalid fields, ", {errorMessage}, res)
    }

    const operator = new Operator({
      data
    })

    await operator.save()

    return httpResponse(201, "Operator created successfully", {data}, res)

  } catch(error) {
    return httpResponse(500, "Internal server error", {}, res)
  }
})


export default router;