import mongoose, {Document, model, Schema} from "mongoose";
import { OperatorBranch, OperatorClass, OperatorGender, OperatorPosition, OperatorSource, OperatorStatus, OperatorTags } from "../enums/operators";
import { WorldFactions, WorldNations, WorldRaces, WorldSarkazTribes } from "../enums/world";



export interface IOperator extends Document {
  name: string;
  internalName: string;
  epName: string;
  fileNumber: string;

  class: OperatorClass;
  branch: OperatorBranch;
  position: OperatorPosition;

  tags: Array<OperatorTags>;
  rarity: number;
  obtainable: OperatorSource;


  loreInformation: {
    gender: OperatorGender;
    race: WorldRaces ;
    birthPlace: WorldNations;
    faction: WorldFactions;
    aliveStatus: OperatorStatus;
    sarkazTribe?: WorldSarkazTribes | null | undefined;
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
    baseSkillOne?: string | null | undefined;
    baseSkillTwo?: string | null | undefined;
  }
}

const operatorSchema: Schema = new Schema<IOperator>({  
  name: {type: String, required: true},
  internalName: {type: String, required: true},
  epName: {type: String, required: true},
  fileNumber: {type: String, required: true},

  class: {type: Number, required: true, enum: OperatorClass},
  branch: {type: Number, required: true, enum: OperatorBranch},
  position: {type: Number, required: true, enum: OperatorPosition},

  tags: {type: [Number], required: true, enum: OperatorTags},
  rarity: {type: Number, required: true},
  obtainable: {type: Number, required: true, enum: OperatorSource},

  loreInformation: [{
    gender: {type: Number, required: true, enum: OperatorGender},
    race: {type: Number, required: true, enum: WorldRaces},
    birthPlace: {type: Number, required: true, enum: WorldNations},
    faction: {type: Number, required: true, enum: WorldFactions},
    aliveStatus: {type: Number, required: true, enum: OperatorStatus},
    sarkazTribe: {type: Number, enum: WorldSarkazTribes},
    infected: {type: Boolean, required: true},
    height: {type: Number, required: true},
    age: {type: String, required: true}
  }],

  voiceActors: [{
    japaneseVA: {type: String, required: true},
    chineseVA: {type: String, required: true},
    englishVA: {type: String, required: true},
    koreanVA: {type: String, required: true}
  }],

  stats: [{
    health: {type: Number, required: true},
    attack: {type: Number, required: true},
    defense: {type: Number, required: true},
    resistance: {type: Number, required: true},
    deploymentPoints: {type: Number, required: true},
    redeploymentTime: {type: Number, required: true},
    block: {type: Number, required: true},
    attackInterval: {type: Number, required: true}
  }],

  skills: [{
    skillOneName: {type: String, required: true},
    skillOneEffect: {type: [String], required: true},
    skillOneInitialSp: {type: [Number], required: true},
    skillOneSpCost: {type: [Number], required: true},
    skillOneActivationTime: {type: [Number], required: true},

    skillTwoName: {type: String, required: true},
    skillTwoEffect: {type: [String], required: true},
    skillTwoInitialSp: {type: [Number], required: true},
    skillTwoSpCost: {type: [Number], required: true},
    skillTwoActivationTime: {type: [Number], required: true},

    skillThreeName: {type: String, required: true},
    skillThreeEffect: {type: [String], required: true},
    skillThreeInitialSp: {type: [Number], required: true},
    skillThreeSpCost: {type: [Number], required: true},
    skillThreeActivationTime: {type: [Number], required: true}
  }],

  otherSkills: [{
    potentialEffects: {type: [String], required: true},
    talentOneEffect: {type: String, required: true},
    talentTwoEffect: {type: String, required: true}
  }],

  base: [{
    baseSkillOne: {type: String},
    baseSkillTwo: {type: String},
  }]
  
}) 

const Operator = model<IOperator>('Operator', operatorSchema);

export default Operator