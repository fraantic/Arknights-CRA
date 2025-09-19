  const operator = new Operator({
    name: "test",
    internalName: "test",
    epName: "test",
    fileNumber: "test",

    class: OperatorClass.Caster,
    branch: OperatorBranch.CasterBlast,
    position: OperatorPosition.Both,
    tags: [OperatorTags.Aoe, OperatorTags.Caster],
    rarity: 3,
    obtainable: OperatorSource.Crossover,
    loreInformation: {
      gender: OperatorGender.Female,
      race: WorldRaces.Aegir,
      birthPlace: WorldNations.Aegir,
      faction: WorldFactions.AbyssalHunters,
      aliveStatus: OperatorStatus.Alive,
      infected: true,
      height: 153,
      age: "too old"
    },

    voiceActors: {
      japaneseVA: "test",
      chineseVA: "test",
      koreanVA: "test",
      englishVA: "test"
    },

    stats: {
      health: 33,
      attack: 11,
      defense: 120,
      resistance: 11,
      deploymentPoints: 21,
      block: 3,
      redeploymentTime: 5,
      attackInterval: 123,
    },

    skills: {
      skillOneEffect: ["hi","hello","goodDay","yes"],
      skillOneName: "hello",
      skillOneInitialSp: [1,2,3,4],
      skillOneSpCost: [1,2,3,4],
      skillOneActivationTime: [4,5,2,1],

      skillTwoEffect: ["hi","hello","goodDay","yes"],
      skillTwoName: "hello",
      skillTwoInitialSp: [1,2,3,4],
      skillTwoSpCost: [1,2,3,4],
      skillTwoActivationTime: [4,5,2,1],

      skillThreeEffect: ["hi","hello","goodDay","yes"],
      skillThreeName: "hello",
      skillThreeInitialSp: [1,2,3,4],
      skillThreeSpCost: [1,2,3,4],
      skillThreeActivationTime: [4,5,2,1]
    },

    otherSkills: {
      potentialEffects: ["yi[ee", "very much so"],
      talentOneEffect: "eats things",
      talentTwoEffect: "eats many things fast",
    }
  })

  operator.save()