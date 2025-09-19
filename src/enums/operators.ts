// File for enums relating to playable character variables

export enum OperatorClass {
  Vanguard,
  Guard,
  Defender,
  Sniper,
  Caster,
  Medic,
  Supporter,
  Specialist
}

export enum OperatorBranch {

  VanguardPioneer,
  VanguardCharger,
  VanguardStandardBearer,
  VanguardTactician,
  VanguardAgent,

  GuardDread,
  GuardCenturion,
  GuardLord,
  GuardArtsFighter,
  GuardInstructor,
  GuardFighter,
  GuardSwordmaster,
  GuardSoloblade,
  GuardLiberator,
  GuardReaper,
  GuardCrusher,
  GuardEarthShaker,
  GuardPrimal,

  DefenderProtector,
  DefenderGaurdian,
  DefenderJuggernaut,
  DefenderArtsProtector,
  DefenderFortress,
  DefenderSentryProtector,
  DefenderPrimalProtector,

  SniperMarksman,
  SniperArtilleryman,
  SniperDeadeye,
  SniperHeavyshooter,
  SniperBesieger,
  SniperFlinger,
  SniperHunter,
  SniperLoopshooter,

  CasterCore,
  CasterSplash,
  CasterBlast,
  CasterChain,
  CasterMechAccord,
  CasterPhalanx,
  CasterMystic,
  CasterPrimal,
  CasterShaper,

  MedicMedic,
  MedicMultitarget,
  MedicTherapist,
  MedicWandering,
  MedicIncantation,
  MedicChain,

  SupporterDecelBinder,
  SupporterSummoner,
  SupporterHexer,
  SupporterBard,
  SupporterAbjurer,
  SupporterArtificer,
  SupporterRitualist,

  SpecialistPushStroker, // 😏
  SpecialistHookmaster,
  SpecialistExecutor,
  SpecialistAmbusher,
  SpecialistGeek,
  SpecialistMerchant,
  SpecialistTrapmaster,
  SpecialistDollkeeper,
  SpecialistAlchemist,
  SpecialistSkyranger
}

export enum OperatorTags {
  TopOperator,
  SeniorOperator,
  Starter,
  Robot,

  Melee,
  Ranged,

  Vanguard,
  Guard,
  Defender,
  Sniper,
  Caster,
  Medic,
  Supporter,
  Specialist,

  Aoe,
  CrowdControl,
  DPRecovery,
  Dps,
  Debuff,
  Defense,
  FastRedeploy,
  Healing,
  Nuker,
  Shift,
  Slow,
  Summon,
  Support,
  Survival,
  Elemental
}

export enum OperatorPosition {
  Melee,
  Ranged,
  Both
}

export enum OperatorSource {
  Standard,
  Limited,
  Crossover
}

export enum OperatorStatus {
  Alive,
  Dead,
  Unknown
}

export enum OperatorGender {
  Male,
  Female,
  Other,
  Unknown
}
