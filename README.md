# Arknights-CRA
Arknights-CommunityRestAPI is an API to get data on everything arknights using ExpressJS, MongoDB and Node.js


# THIS API UNDER CONSTRUCTION

## What do the numbers mean (eg, race = 15)

<details>

the numbers are a more robust way to store the data rather than strings and each value represents a race or class or etc, the definitions are displayed below

<details>
  <summary>Relating to the world</summary>

  <br>

  <details>
  <summary>WorldRaces</summary>

    Aegir = 0
    Ageless = 1
    Anasa = 2
    Anaty = 3
    Anura = 4
    Archosauria =  5
    Aslan = 6
    BeastLord = 7 
    Caprinae = 8
    Cautus = 9
    Cerato = 10
    Chimera = 11
    Collapsal = 12 
    Draco = 13
    Durin = 14
    Earthling = 15
    Elafia = 16
    Feline = 17
    Feranmut = 18 
    Firstborn = 19
    Forte = 20
    Itra = 21
    Kukulkan = 22 
    Kuranta = 23
    Kylin = 24
    Liberi = 25
    Lung = 26
    Lupo = 27
    Manticore = 28 
    Observer = 29
    Oni = 30
    Perro = 31 
    Petram = 32
    Phidia = 33
    Pilosa = 34
    Predecessor = 35 
    Reproba = 36
    Sankta = 37
    Sarkaz = 38
    Savra = 39
    Seaborn = 40 
    Ursus = 41
    Vouivre = 42 
    Vulpo =  43
    Zalak = 44
    Unknown = 45
  </details>
  <small>used for operator races</small>

  <br>

  <details>
  <summary>WorldSarkazTribes</summary>
  
    None = -1
    Vampire = 0
    Wendigo = 1
    Banshee = 2
    Gargoyle = 3 
    Nachzehrer = 4 
    Damazti = 5
    Diablo = 6
    Lich = 7
    Cyclops = 8 
    Djall = 9
    Goliath = 10
    IceGargoyle = 11 
    Slugkaz = 12
    Electrokaz = 13 
    Clotheskaz = 14
    Other = 15
    Unknown = 16
  </details>
  <small>used for sarkaz tribes</small>

  <br>


  <details>
  <summary>WorldNations</summary>

    Aegir = 0
    Iberia = 1 
    Bolivar = 2 
    Columbian = 3 
    Siestan = 4
    Kazimierz = 5 
    Kjerag = 6
    Leithanien = 7 
    Siracusa = 8
    Laterano = 9
    Kazdel = 10
    RhodesIsland = 11 
    RimBilliton = 12
    Sami = 13
    Sargon = 14 
    Minos = 15
    Ursus = 16
    Victoria = 17 
    Tara = 18
    Gaul = 19
    Yan = 20
    Lungmen = 21 
    Higashi = 22
    Unknown = 21
  </details>
  <small>used for operator birth place</small>

  <br>
 
  <details>
  <summary>WorldFactions</summary>

    PenguinLogistics = 1
    TeamRainbow = 2
    LungmenGuardDepartment = 3
    LeeDetectiveAgency = 4
    Sui = 5
    Glasgow = 6 
    UrsusStudentSelfGoverningGroup = 7
    SWEEP = 8
    OpReserveA6 = 9 
    OpReserveA4 = 10
    OpReserveA1 = 11
    OpA4 = 12
    Followers = 13
    EliteOp = 14
    Babel = 15
    KarlanTrade = 16 
    PinusSylvestris = 17  
    RhineLab = 18
    Blacksteel = 19 
    AbyssalHunters = 20 
    Aegir = 21
    Iberia = 22
    Bolivar = 23
    Columbian = 24 
    Siestan = 25
    Kazimierz = 26 
    Kjerag = 27
    Leithanien = 28  
    Siracusa = 29
    Laterano = 30
    Kazdel = 31
    RhodesIsland = 32 
    RimBilliton = 33
    Sami = 34
    Sargon = 35 
    Minos = 36
    Ursus = 37
    Victoria = 38 
    Tara = 39
    Gaul = 40
    Yan = 41
    Lungmen = 42  
    Higashi = 43
    Unknown = 44
  </details>
  <small>used for operator factions</small>

</details>

<br>
<br>

<details>
<summary>Relating to operators</summary>

  <br>

  <details>
  <summary>OperatorClass</summary>
   
    Vanguard = 0
    Guard = 1
    Defender = 2 
    Sniper = 3
    Caster = 4
    Medic = 5
    Supporter = 6 
    Specialist = 7
  </details>
  <small>used for operator classes</small>

  <br>

  <details>
  <summary>OperatorBranch</summary> 

    VanguardPioneer = 0
    VanguardCharger = 1
    VanguardStandardBearer = 2 
    VanguardTactician = 3
    VanguardAgent = 4
    GuardDread = 5
    GuardCenturion = 6 
    GuardLord = 7
    GuardArtsFighter = 8 
    GuardInstructor = 9
    GuardFighter = 10
    GuardSwordmaster = 11 
    GuardSoloblade = 12
    GuardLiberator = 13
    GuardReaper = 14
    GuardCrusher = 15
    GuardEarthShaker = 16 
    GuardPrimal = 17
    DefenderProtector = 18 
    DefenderGaurdian = 19
    DefenderJuggernaut = 20 
    DefenderArtsProtector = 21  
    DefenderFortress = 22
    DefenderSentryProtector = 23
    DefenderPrimalProtector = 24
    SniperMarksman = 25
    SniperArtilleryman = 26  
    SniperDeadeye = 27
    SniperHeavyshooter = 28  
    SniperBesieger = 29
    SniperFlinger = 30
    SniperHunter = 31
    SniperLoopshooter = 32
    CasterCore = 33
    CasterSplash = 34 
    CasterBlast = 35
    CasterChain = 36
    CasterMechAccord = 37
    CasterPhalanx = 38
    CasterMystic = 39
    CasterPrimal = 40
    CasterShaper = 41
    MedicMedic = 42
    MedicMultitarget = 43
    MedicTherapist = 44
    MedicWandering = 45
    MedicIncantation = 46 
    MedicChain = 47
    SupporterDecelBinder = 48
    SupporterSummoner = 49
    SupporterHexer = 50
    SupporterBard = 51
    SupporterAbjurer = 52 
    SupporterArtificer = 53
    SupporterRitualist = 54
    SpecialistPushStroker = 55
    SpecialistHookmaster = 56
    SpecialistExecutor = 57
    SpecialistAmbusher = 58
    SpecialistGeek = 59
    SpecialistMerchant = 60
    SpecialistTrapmaster = 61
    SpecialistDollkeeper = 62
    SpecialistAlchemist = 63
    SpecialistSkyranger = 64
  </details>
  <small>used for operator sub classes</small>

  <br>

  <details>
  <summary>OperatorTags</summary>
   
    TopOperator = 0
    SeniorOperator = 1
    Starter = 2
    Robot = 3
    Melee = 4
    Ranged = 5 
    Vanguard = 6 
    Guard = 7
    Defender = 8 
    Sniper = 9
    Caster = 10
    Medic = 11
    Supporter = 12
    Specialist = 13
    Aoe = 14
    CrowdControl = 15
    DPRecovery = 16
    Dps = 17
    Debuff = 18
    Defense = 19
    FastRedeploy = 20
    Healing = 21
    Nuker = 22
    Shift = 23
    Slow = 24
    Summon = 25
    Support = 26
    Survival = 27
    Elemental = 28
  </details>
  <small>used for operator recruitment tags</small>

  <br>

  <details>
  <summary>OperatorPosition</summary>
   
    Melee = 0
    Ranged = 1
    Both = 2
  </details>
  <small>used for operator positional placements</small>

  <br>

  <details>
  <summary>OperatorSource</summary>
   
    Standard = 0
    Limited = 1
    Crossover = 2
  </details>
  <small>used for operator source </small>

  <br>

  <details>
  <summary>OperatorStatus</summary>
   
    Alive = 0
    Dead = 1
    Unknown = 2
  </details>
  <small>used for operator lore status aka dead/alive</small>

  <br>

  <details>
  <summary>OperatorGender</summary>
   
    Male = 0
    Female = 1  
    Other = 2
    Unknown = 3
  </details>
  <small>used for operator gender</small>
  
</details>
