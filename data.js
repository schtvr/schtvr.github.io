export default vault = {
  actions: {
    attack: {
      consoleText: ["action: attack", "initiates a volley against a target"],
    },
    defend: {
      consoleText: ["action: defend", "initiates a volley to prevent damage"],
    },
    overcome: {
      consoleText: [
        "action: overcome",
        "solves an obstacle or bolsters a teammate's volley",
      ],
    },
    support: {
      consoleText: ["action: support", "bolsters one or more allies"],
    },
  },
  channels: {
    elemental: {
      consoleText: ["channel: elemental", "the forces of nature"],
      effects: {},
    },
    organic: {
      consoleText: ["channel: organic", "the force of living organisms"],
      effects: {},
    },
    psychic: {
      consoleText: ["channel: psychic", "the expanded force of the mind"],
      effects: {},
    },
    quantum: {
      consoleText: ["channel: quantum", "the forces of subatomic particles"],
      effects: {},
    },
    soul: {
      consoleText: ["channel: soul", "the binding life-force of the universe"],
      effects: {},
    },
    tech: {
      consoleText: ["channel: tech", "the products of invention"],
      effects: {},
    },
  },
  skills: {
    agility: {
      consoleText: [
        "agility: physical dexterity",
        "the skill of moving quickly and easily",
      ],
    },
    brawl: {
      consoleText: ["brawl: close combat", "the skill of melee range combat"],
    },
    contacts: {
      consoleText: [
        "contacts: long-term charisma",
        "the skill of knowing and making connections with people",
      ],
    },
    insight: {
      consoleText: [
        "insight: applied wisdom",
        "the skill of understanding a situation and all its constituent parts",
      ],
    },
    operate: {
      consoleText: [
        "operate: applied intelligence",
        "the skill of interacting with technology",
      ],
    },
    perform: {
      consoleText: ["perform: social dexterity", "the skill of entertaining"],
    },
    persuade: {
      consoleText: [
        "persuade: social strength",
        "the skill of convincing others",
      ],
    },
    physique: {
      consoleText: [
        "physique: physical strength",
        "the skill of utilizing strength",
      ],
    },
    shoot: {
      consoleText: ["shoot: ranged combat", "the skill of hitting a target"],
    },
    stealth: {
      consoleText: [
        "stealth: movement dexterity",
        "the skill of unnoticed action",
      ],
    },
  },
  specialties: {
    tank: {
      consoleText: [
        "tank: the pillar",
        "does something special, +1 to all defense rolls",
      ],
      effects: {
        agility: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
        brawl: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
        contacts: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
        insight: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
        operate: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
        perform: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
        persuade: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
        physique: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
        shoot: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
        stealth: {
          attack: 0,
          defend: 1,
          overcome: 0,
          support: 0,
        },
      },
    },
    fighter: {
      consoleText: [
        "fighter: taking the offensive is a lifestyle",
        "does something special, +1 to all attack rolls",
      ],
      effects: {
        agility: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        brawl: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        contacts: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        insight: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        operate: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        perform: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        persuade: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        physique: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        shoot: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        stealth: {
          attack: 1,
          defend: 0,
          overcome: 0,
          support: 0,
        },
      },
    },
    support: {
      consoleText: [
        "support: that which makes a team greater than the sum of its parts",
        "does something special, +1 to all support rolls",
      ],
      effects: {
        agility: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
        brawl: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
        contacts: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
        insight: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
        operate: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
        perform: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
        persuade: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
        physique: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
        shoot: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
        stealth: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 1,
        },
      },
    },
    mentalist: {
      consoleText: [
        "mentalist: excels at all cerebral activities",
        "does something special, +1 to all mental rolls idk",
      ],
      effects: {
        agility: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        brawl: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        contacts: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        insight: {
          attack: 1,
          defend: 1,
          overcome: 1,
          support: 1,
        },
        operate: {
          attack: 1,
          defend: 1,
          overcome: 1,
          support: 1,
        },
        perform: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        persuade: {
          attack: 1,
          defend: 1,
          overcome: 1,
          support: 1,
        },
        physique: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        shoot: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 0,
        },
        stealth: {
          attack: 0,
          defend: 0,
          overcome: 0,
          support: 0,
        },
      },
    },
  },
  aspects: {
    help: "each aspect is a central part of a character that sticks with them and informs their actions. they can be relationships, heirlooms, aspirations, inner turmoil, etc. they should be both a source of power and a nagging weakness.",
    names:
      "e.g. never leaves a crewmember behind, armed to the teeth, dreams of becoming the king of the pirates",
    briefDesc:
      "e.g. always seeks to find a peaceful solution, even if there isn't one",
    effectDesc:
      "e.g. agility overcome +1 /n \n edward uses his alchemy to circumvent  an obstacle",
  },
};
