import express, { Request, Response } from 'express'
import { httpResponse } from '../lib/httpsResponse';
import Operator, { operatorZodSchema } from '../models/operator';
import { number, string, z } from 'zod';
import { flatten, $, $set, } from 'mongo-dot-notation';
import { Query } from 'mongoose';
import { de } from 'zod/v4/locales/index.cjs';
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
router.get('/get', async(req: Request & {
  // query parameters
  query: {
    data: {
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
      heightFrom: number | null;
      heightTo: number | null;
      age: string | null;
      health: number | null;
      healthFrom: number | null;
      healthTo: number | null;
      attack: number | null;
      attackFrom: number | null;
      attackTo: number | null;
      defense: number | null;
      defenseFrom: number | null;
      defenseTo: number | null;
      resistance: number | null;
      resistanceFrom: number | null;
      resistanceTo: number | null;
      deploymentPoints: number | null;
      deploymentPointsFrom: number | null;
      deploymentPointsTo: number | null;
      redeploymentTime: number | null;
      redeploymentTimeFrom: number | null;
      redeploymentTimeTo: number | null;
      block: number | null;
      blockFrom: number | null;
      blockTo: number | null;
      attackInterval: number | null;
      attackIntervalFrom: number | null;
      attackIntervalTo: number | null;
    }
  }
}, res: Response) => {
  try {

    // define all search variables
    let {name = null, internalName = null, epName = null, fileNumber = null, playableClass = null,
        branch = null, position = null, tags = null, rarity = null, obtainable = null, gender = null,
        race = null, birthPlace = null, faction = null, aliveStatus = null, sarkazTribe = null,
        infected = null, height = null, age = null, attack = null, defense = null, resistance = null,
        redeploymentTime = null, block = null, attackInterval = null, heightFrom = null, heightTo = null,
        health = null, healthFrom = null, deploymentPoints = null, healthTo = null, attackFrom = null,
        attackTo = null, defenseFrom = null, defenseTo = null, resistanceFrom = null, resistanceTo = null,
        deploymentPointsFrom = null, deploymentPointsTo = null, redeploymentTimeFrom = null,
        redeploymentTimeTo = null, blockFrom = null, blockTo = null, attackIntervalFrom = null,
        attackIntervalTo = null,} = req.query

    // sets the typing / structure

    let query: {
      data: {
        name?: string;
        internalName?: string;
        epName?: string;
        fileNumber?: string;
        playableClass?: number;
        branch?: number;
        position?: number;
        tags?: object;
        rarity?: number;
        obtainable?: number;

        loreInformation?: {
          gender?: number;
          race?: number;
          birthPlace?: number;
          faction?: number;
          aliveStatus?: number;
          sarkazTribe?: number;
          infected?: number;
          height?: {
            $eq?: number;
            $gte?: number;
            $lte?: number;
          };
          age?: string;
        }
        
        stats?: {
          health?: {
            $eq?: number;
            $gte?: number;
            $lte?: number;
          };
          attack?: {
            $eq?: number;
            $gte?: number;
            $lte?: number;
          };
          defense?: {
            $eq?: number;
            $gte?: number;
            $lte?: number;
          };
          resistance?: {
            $eq?: number;
            $gte?: number;
            $lte?: number;
          };
          deploymentPoints?: {
            $eq?: number;
            $gte?: number;
            $lte?: number;
          };
          redeploymentTime?: {
            $eq?: number;
            $gte?: number;
            $lte?: number;
          };
          block?: {
            $eq?: number;
            $gte?: number;
            $lte?: number;
          };
          attackInterval?: {
            $eq?: number;
            $gte?: number;
            $lte?: number;
          };
        }
      }
    } = {data: {}}


    // find a way to refactor this if statement hell later

    // this sets the values if they are given in the get req
    if (name) {
      query.data.name = name.toString();
    }

    if (internalName) {
      query.data.internalName = internalName.toString();
    }

    if (epName) {
      query.data.epName = epName.toString();
    }

    if (fileNumber) {
      query.data.fileNumber = fileNumber.toString();
    }

    if (playableClass) {
      query.data.playableClass = Number(playableClass)
    }

    if (branch) {
      query.data.branch = Number(branch);
    }

    if (position) {
      query.data.position = Number(position);
    }


    if (tags) {
      let tmp = tags as string
      query.data.tags = $set({"$all": Array.from(tmp.split(","), Number)})
    }

    if (rarity) {
      query.data.rarity = Number(rarity);
    }

    if (obtainable) {
      query.data.obtainable = Number(obtainable); 
    }

    if (gender) {
      if (query.data.loreInformation == null) {
        query.data.loreInformation = {}
      }
      query.data.loreInformation.gender = Number(gender);
    }

    if (race) {
      if (query.data.loreInformation == null) {
        query.data.loreInformation = {}
      }
      query.data.loreInformation.race = Number(race) 
    }

    if (birthPlace) {
      if (query.data.loreInformation == null) {
        query.data.loreInformation = {}
      }
      query.data.loreInformation.birthPlace = Number(birthPlace)
    }

    if (faction) {
      if (query.data.loreInformation == null) {
        query.data.loreInformation = {}
      }
      query.data.loreInformation.faction = Number(faction)
    }

    if (aliveStatus) {
      if (query.data.loreInformation == null) {
        query.data.loreInformation = {}
      }
      query.data.loreInformation.aliveStatus = Number(aliveStatus)
    }
    
    if (sarkazTribe) {
      if (query.data.loreInformation == null) {
        query.data.loreInformation = {}
      }
      query.data.loreInformation.sarkazTribe = Number(sarkazTribe)
    }

    if (infected) {
      if (query.data.loreInformation == null) {
        query.data.loreInformation = {}
      }
      query.data.loreInformation.infected = Number(infected)
    }

    if (height || heightFrom || heightTo) {
      if (query.data.loreInformation == null) {
        query.data.loreInformation = {}
      }
      query.data.loreInformation.height = {}

      if (height) {
        query.data.loreInformation.height = $set({"$eq":  Number(height)})
      }

      if (heightFrom) {
        query.data.loreInformation.height = $set({"$gte":  Number(heightFrom)})
      }

      if (heightTo) {
        query.data.loreInformation.height = $set({"$lte":  Number(heightTo)})
      }
    }

    if (age) {
      if (query.data.loreInformation == null) {
        query.data.loreInformation = {}
      }
      query.data.loreInformation.age = age.toString()
    }

    if (attack || attackFrom || attackTo) {
      if (query.data.stats == null) {
        query.data.stats = {}
      }
      query.data.stats.attack = {}

      if (attack) {
        query.data.stats.attack = $set({"$eq":  Number(attack)})
      }

      if (attackFrom) {
        query.data.stats.attack = $set({"$gte":  Number(attackFrom)})
      }

      if (attackTo) {
        query.data.stats.attack = $set({"$lte":  Number(attackTo)})
      }
    }

    if (defense || defenseFrom || defenseTo) {
      if (query.data.stats == null) {
        query.data.stats = {}
      }
      query.data.stats.defense = {}

      if (defense) {
        query.data.stats.defense = $set({"$eq":  Number(defense)})
      }

      if (defenseFrom) {
        query.data.stats.defense = $set({"$gte":  Number(defenseFrom)})
      }

      if (defenseTo) {
        query.data.stats.defense = $set({"$lte":  Number(defenseTo)})
      }
    }

    if (resistance || resistanceFrom || resistanceTo) {
      if (query.data.stats == null) {
        query.data.stats = {}
      }
      query.data.stats.resistance = {}

      if (resistance) {
        query.data.stats.resistance = $set({"$eq":  Number(resistance)})
      }

      if (resistanceFrom) {
        query.data.stats.resistance = $set({"$gte":  Number(resistanceFrom)})
      }

      if (resistanceTo) {
        query.data.stats.resistance = $set({"$lte":  Number(resistanceTo)})
      }
    }

    if (redeploymentTime || redeploymentTimeFrom || redeploymentTimeTo) {
      if (query.data.stats == null) {
        query.data.stats = {}
      }
      query.data.stats.redeploymentTime = {}

      if (redeploymentTime) {
        query.data.stats.redeploymentTime = $set({"$eq":  Number(redeploymentTime)})
      }

      if (redeploymentTimeFrom) {
        query.data.stats.redeploymentTime = $set({"$gte":  Number(redeploymentTimeFrom)})
      }

      if (redeploymentTimeTo) {
        query.data.stats.redeploymentTime = $set({"$lte":  Number(redeploymentTimeTo)})
      }
    }

    if (block || blockFrom || blockTo) {
      if (query.data.stats == null) {
        query.data.stats = {}
      }
      query.data.stats.block = {}

      if (block) {
        query.data.stats.block = $set({"$eq":  Number(block)})
      }

      if (blockFrom) {
        query.data.stats.block = $set({"$gte":  Number(blockFrom)})
      }

      if (blockTo) {
        query.data.stats.block = $set({"$lte":  Number(blockTo)})
      }
    }

    if (attackInterval || attackIntervalFrom || attackIntervalTo) {
      if (query.data.stats == null) {
        query.data.stats = {}
      }
      query.data.stats.attackInterval = {}

      if (attackInterval) {
        query.data.stats.attackInterval = $set({"$eq":  Number(attackInterval)})
      }

      if (attackIntervalFrom) {
        query.data.stats.attackInterval = $set({"$gte":  Number(attackIntervalFrom)})
      }

      if (attackIntervalTo) {
        query.data.stats.attackInterval = $set({"$lte":  Number(attackIntervalTo)})
      }
    }

    if (health || healthFrom || healthTo) {
      if (query.data.stats == null) {
        query.data.stats = {}
      }
      query.data.stats.health = {}

      if (health) {
        query.data.stats.health = $set({"$eq":  Number(health)})
      }

      if (healthFrom) {
        query.data.stats.health = $set({"$gte":  Number(healthFrom)})
      }

      if (healthTo) {
        query.data.stats.health = $set({"$lte":  Number(healthTo)})
      }
    }

    if (deploymentPoints || deploymentPointsFrom || deploymentPointsTo) {
      if (query.data.stats == null) {
        query.data.stats = {}
      }
      query.data.stats.deploymentPoints = {}

      if (deploymentPoints) {
        query.data.stats.deploymentPoints = $set({"$eq":  Number(deploymentPoints)})
      }

      if (deploymentPointsFrom) {
        query.data.stats.deploymentPoints = $set({"$gte":  Number(deploymentPointsFrom)})
      }

      if (deploymentPointsTo) {
        query.data.stats.deploymentPoints = $set({"$lte":  Number(deploymentPointsTo)})
      }
    }

    // flattens the typing / struct into the dot format mongodb accepts
    const flattenedQuery = flatten(query) as any
      console.log(flattenedQuery['$set'])

    // sends a req to the db
    const operators = await Operator.find(flattenedQuery['$set'])

    // success response
    return httpResponse(200, "Operators retrieved successfully", {operators}, res);

  } catch (error) {
    console.error("Error getting operator info", error);
    return httpResponse(500, "Internal server error", {}, res)
  }
})


export default router;