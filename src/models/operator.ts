import { z } from 'zod'
 
import mongoose, {Document, model, Schema} from "mongoose"

export interface IOperator extends Document {
  data: {
    name: string;
    internalName: string;
    epName: string;
    fileNumber: string;

    class: number;
    branch: number;
    position: number;

    tags: number[];
    rarity: number;
    obtainable: number;


    loreInformation: [
      gender: number,
      race: number ,
      birthPlace: number,
      faction: number,
      aliveStatus: number,
      infected: boolean,
      height: number,
      age: string,
      sarkazTribe: number,
    ]

    voiceActors: [
      japaneseVA: string,
      chineseVA: string,
      englishVA: string,
      koreanVA: string,
    ]

    stats: [
      health: number,
      attack: number,
      defense: number,
      resistance: number,
      deploymentPoints: number,
      redeploymentTime: number,
      block: number,
      attackInterval: number,
    ]
    
    skills: {
      skillName: string;
      skillEffect: string[];
      skillInitialSp: number[];
      skillSpCost: number[];
      skillActivationTime: number[];
    }

    otherSkills: [
      potentialEffects: string[],
      talentOneEffect: string,
      talentTwoEffect: string,
    ]

    base: [
      baseSkillOne: string,
      baseSkillTwo: string,
    ]
  }
} 

export const operatorZodSchema = z.object({
  data: z.object({
    name: z.string(),
    internalName: z.string(),
    epName: z.string(),
    fileNumber: z.string(),

    class: z.number().gte(0).lte(7),
    branch: z.number().gte(0).lte(64),
    position: z.number().gte(0).lte(2),

    tags: z.array(z.number().gte(0).lte(28)),
    rarity: z.number(),
    obtainable: z.number().gte(0).lte(2),


    loreInformation: z.object({
      gender: z.number().gte(0).lte(2),
      race: z.number().gte(0).lte(45),
      birthPlace: z.number().gte(0).lte(21),
      faction: z.number().gte(0).lte(44),
      aliveStatus: z.number().gte(0).lte(2),
      infected: z.boolean(),
      height: z.number(),
      age: z.string(),
      sarkazTribe: z.number().gte(-1).lte(16).optional(),
    }),

    voiceActors: z.object({
      japaneseVA: z.string(),
      chineseVA: z.string(),
      englishVA: z.string(),
      koreanVA: z.string(),
    }),

    stats: z.object({
      health: z.number(),
      attack: z.number(),
      defense: z.number(),
      resistance: z.number(),
      deploymentPoints: z.number(),
      redeploymentTime: z.number(),
      block: z.number(),
      attackInterval: z.number(),
    }),
    
    skills: z.array(z.object({
      skillName: z.string(),
      skillEffect: z.string().array(),
      skillInitialSp: z.array(z.number()),
      skillSpCost: z.array(z.number()),
      skillActivationTime: z.array(z.number()),
    })),

    otherSkills: z.object({
      potentialEffects: z.array(z.string()),
      talentOneEffect: z.string(),
      talentTwoEffect: z.string(),
    }),

    base: z.object({
      baseSkillOne: z.string(),
      baseSkillTwo: z.string(),
    })
  })
})

const operatorMongooseSchema: Schema = new Schema<IOperator>({  
  data: {
    name: {type: String, required: true},
    internalName: {type: String, required: true},
    epName: {type: String, required: true},
    fileNumber: {type: String, required: true},

    class: {type: Number, required: true},
    branch: {type: Number, required: true},
    position: {type: Number, required: true},

    tags: {type: [Number], required: true},
    rarity: {type: Number, required: true},
    obtainable: {type: Number, required: true},

    loreInformation: {
      gender: {type: Number, required: true},
      race: {type: Number, required: true},
      birthPlace: {type: Number, required: true},
      faction: {type: Number, required: true},
      aliveStatus: {type: Number, required: true},
      sarkazTribe: {type: Number, required: true},
      infected: {type: Boolean, required: true},
      height: {type: Number, required: true},
      age: {type: String, required: true}
    },

    voiceActors: {
      japaneseVA: {type: String, required: true},
      chineseVA: {type: String, required: true},
      englishVA: {type: String, required: true},
      koreanVA: {type: String, required: true}
    },

    stats: {
      health: {type: Number, required: true},
      attack: {type: Number, required: true},
      defense: {type: Number, required: true},
      resistance: {type: Number, required: true},
      deploymentPoints: {type: Number, required: true},
      redeploymentTime: {type: Number, required: true},
      block: {type: Number, required: true},
      attackInterval: {type: Number, required: true}
    },

    skills: [{
      skillName: {type: String, required: true},
      skillEffect: {type: [String], required: true},
      skillInitialSp: {type: [Number], required: true},
      skillSpCost: {type: [Number], required: true},
      skillActivationTime: {type: [Number], required: true},
    }],

    otherSkills: {
      potentialEffects: {type: [String], required: true},
      talentOneEffect: {type: String, required: true},
      talentTwoEffect: {type: String, required: true}
    },

    base: {
      baseSkillOne: {type: String, required: true},
      baseSkillTwo: {type: String, required: true},
    }
  }
}) 

const Operator = model<IOperator>('Operator', operatorMongooseSchema)

export default Operator