const vault = {
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
const state = {
  characters: [
    {
      name: "straw boy",
      specialty: "fighter",
      aspects: [
        {
          name: "rubber arms",
          description: "strecthy boy is stretchy",
          effects: [
            {
              skill: "agility",
              action: "attack",
              effect: 1,
              channel: "elemental",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "agility",
              action: "defend",
              effect: 2,
              channel: "organic",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          name: "future pirate king",
          description: "nothing will stop him from his dreams",
          effects: [
            {
              skill: "brawl",
              action: "overcome",
              effect: 1,
              channel: "soul",
            },
            {
              skill: "contacts",
              action: "support",
              effect: 2,
              channel: "",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          name: "walking concussion",
          description: "meat brain",
          effects: [
            {
              skill: "insight",
              action: "support",
              effect: -1,
              channel: "",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "stealth",
              action: "support",
              effect: 1,
              channel: "tech",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          name: "free man",
          description: "open seas",
          effects: [
            {
              skill: "operate",
              action: "defend",
              effect: -1,
              channel: "psychic",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "persuade",
              action: "overcome",
              effect: -1,
              channel: "quantum",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
      ],
      skills: {
        agility: [1],
        brawl: [2],
        contacts: [2],
        insight: [-1],
        operate: [1],
        perform: [1],
        persuade: [-1],
        physique: [-1],
        shoot: [-1],
        stealth: [3],
      },
      stunts: [
        {
          name: "gum gum pistol",
          description:
            "luffy can punch hard as a pistol. once per conflict, luffy gets an automatic +2 for his BRAWL ATTACK roll.",
        },
      ],
    },
    {
      name: "man boy",
      specialty: "tank",
      aspects: [
        {
          name: "man arms",
          description: "man boy is man",
          effects: [
            {
              skill: "shoot",
              action: "attack",
              effect: 1,
              channel: "soul",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "perform",
              action: "defend",
              effect: 1,
              channel: "elemental",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          name: "future boy king",
          description: "nothing will stop man from his boy",
          effects: [
            {
              skill: "brawl",
              action: "attack",
              effect: 1,
              channel: "soul",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "insight",
              action: "advantage",
              effect: 1,
              channel: "elemental",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          name: "walking boy",
          description: "man brain",
          effects: [
            {
              skill: "operate",
              action: "attack",
              effect: -1,
              channel: "elemental",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "stealth",
              action: "advantage",
              effect: -1,
              channel: "soul",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          name: "boy man",
          description: "open man",
          effects: [
            {
              skill: "operate",
              action: "attack",
              effect: -1,
              channel: "soul",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "persuade",
              action: "advantage",
              effect: -1,
              channel: "elemental",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
      ],
      skills: {
        agility: [1],
        brawl: [2],
        contacts: [1],
        insight: [1],
        operate: [-1],
        perform: [3],
        persuade: [2],
        physique: [-1],
        shoot: [-1],
        stealth: [-1],
      },
      stunts: [
        {
          name: "man boy punch",
          description:
            "man boy materializes the angst of hitting 40 years old into a single punch.",
        },
      ],
    },
    {
      name: "skeet skrrt",
      specialty: "support",
      aspects: [
        {
          name: "skeet",
          description: "skrrt",
          effects: [
            {
              skill: "stealth",
              action: "defend",
              effect: 1,
              channel: "",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "perform",
              action: "attack",
              effect: 1,
              channel: "quantum",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          name: "skeet skeet",
          description: "skrrrrt",
          effects: [
            {
              skill: "brawl",
              action: "attack",
              effect: 1,
              channel: "quantum",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "contacts",
              action: "overcome",
              effect: 1,
              channel: "psychic",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          name: "skrrrrrt",
          description: "skeet",
          effects: [
            {
              skill: "insight",
              action: "attack",
              effect: -1,
              channel: "quantum",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "brawl",
              action: "attack",
              effect: 1,
              channel: "quantum",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
        {
          name: "skrt",
          description: "skrrrt",
          effects: [
            {
              skill: "operate",
              action: "advantage",
              effect: -1,
              channel: "quantum",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              skill: "persuade",
              action: "overcome",
              effect: -1,
              channel: "psychic",
              description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
          ],
        },
      ],
      skills: {
        agility: [-1],
        brawl: [2],
        contacts: [-1],
        insight: [1],
        operate: [2],
        perform: [1],
        persuade: [-1],
        physique: [1],
        shoot: [-1],
        stealth: [3],
      },
      stunts: [
        {
          name: "skeet",
          description: "skrt",
        },
      ],
    },
  ],
  activeCharacterIndex: 0,
  wizCharacter: {
    name: "",
    specialization: "",
    skills: {
      agility: [],
      brawl: [],
      contacts: [],
      insight: [],
      operate: [],
      perform: [],
      persuade: [],
      physique: [],
      shoot: [],
      stealth: [],
    },
    aspects: [],
  },
  volley: [
    {
      team: "",
      roller: "",
      skill: "",
      action: "",
      channel: "",
      rolls: [],
      base: 0,
      specialty: "",
      position: [],
    },
  ],
};

// helpers
const clearParent = (parent) => {
  if (!parent) return;
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
const createElement = (type, classes, options) => {
  const el = document.createElement(type);
  classes.forEach((className) => el.classList.add(className));
  for (const name in options)
    !(name == "innerText") && el.setAttribute(name, options[name]);
  if (options.innerText) el.innerText = options.innerText;
  return el;
};
const updateConsole = (title, body) => {
  const t = document.querySelector(".console-header");
  const b = document.querySelector(".console-body");
  if (title) {
    t.innerHTML = title;
  }
  if (title == "clear") t.innerHTML = "";
  if (body == "clear") {
    clearParent(b);
    b.innerHTML = "";
    return;
  }
  const bods = body.map((bod) =>
    createElement("div", ["console-bod"], { innerText: bod })
  );
  if (body) {
    clearParent(b);
    bods.forEach((bod) => b.append(bod));
  }
};
const addHoverEffect = (elsArray) => {
  elsArray.forEach((el) => el.classList.add("hover-effect"));
};
const hoverOffWiz = (e) => {
  const classes = [...e.target.classList];

  const wizConsole = classes.filter((e) => e.includes("wiz"));

  const consoleBox = document.querySelector(`.wiz-console.${wizConsole[0]}`)
    ? document.querySelector(`.wiz-console.${wizConsole[0]}`)
    : document.querySelector(`.wiz-console.${wizConsole[0]}s`);
  clearParent(consoleBox);
};

// event handlers
const hover = (e) => {
  //update console
  const classList = Array.from(e.target.classList);
  classList.every((c) => {
    switch (c) {
      case "aspect": {
        const { actions, channels, skills } = vault;
        const name = e.target.innerText;
        const { aspects } = state.characters[state.activeCharacterIndex];
        const { description, effects } = aspects.filter(
          (a) => a.name == name
        )[0];
        const title = `${name}: ${description}`;
        // add hover-effect to actions and generate console body
        const body = effects.map((ef, i) => {
          // add hover-effects
          e.target.classList.add("hover-effect");
          const els = [
            ...document.querySelectorAll(
              `div.${ef.action}.${ef.skill}:not(.aspect)`
            ),
          ];
          addHoverEffect(els);

          // hydrate console body text
          const modifier = ef.effect >= 0 ? `+${ef.effect}` : ef.effect;
          const res = `effect: ${ef.skill} ${ef.action}: ${modifier}

        ${ef.description}

        channel: ${ef.channel}`;
          return res;
        });
        updateConsole(title, body);
        break;
      }
      case "action-roll": {
        const action = classList[2];
        const skill = classList[3];
        const body = [
          vault.skills[skill].consoleText.join("\n\n"),
          vault.actions[action].consoleText.join("\n\n"),
        ];
        updateConsole("click to roll", body);

        // update connected divs
        const divs = [
          ...document.getElementsByClassName(`${skill} ${action}`),
          document.getElementsByClassName(`skill ${skill}`)[0],
        ];
        addHoverEffect(divs);
        break;
      }
      case "skill": {
        const skillName = classList[1];
        const data = vault.skills[skillName].consoleText;
        updateConsole(data[0], [data[1]]);
        document
          .querySelector(`.action-row.${skillName}`)
          .classList.add("hover-effect-bg");
        e.target.classList.add("hover-effect");
        break;
      }
      case "specialty": {
        break;
      }
      case "skill-draggable": {
        const holder = e.target.innerText;
        const name = parseInt(holder.slice(holder.length - 1, holder.length))
          ? holder.substring(0, holder.length - 2)
          : holder;
        const data = vault.skills[name]?.consoleText;
        const classes = ["wiz-skills", "wiz-skills-bod"];
        const body = data?.map((bod) =>
          createElement("div", classes, { innerText: bod })
        );
        const dest = document.querySelector(".wiz-console.wiz-skills");
        body?.forEach((bod) => dest.append(bod));

        break;
      }
      case "wiz-spec": {
        const name = e.target.innerText;
        const data = vault.specialties[name].consoleText;
        const body = data.map((bod) =>
          createElement("div", ["spec-desc"], { innerText: bod })
        );
        const dest = document.querySelector(".wiz-console.wiz-spec");
        body.forEach((bod) => dest.append(bod));
        break;
      }
      case "aspect-help": {
        const dest = document.querySelector(".wiz-console.wiz-aspects");
        const els = createElement("div", [], { innerText: vault.aspects.help });
        dest.append(els);
        break;
      }
      case "aspect-desc-brief": {
        const dest = document.querySelector(".wiz-console.wiz-aspects");
        const els = createElement("div", [], {
          innerText: vault.aspects.briefDesc,
        });
        dest.append(els);
        break;
      }
      case "aspect-title": {
        const dest = document.querySelector(".wiz-console.wiz-aspects");
        const els = createElement("div", [], {
          innerText: vault.aspects.names,
        });
        dest.append(els);
        break;
      }
      case "aspect-desc-secondary": {
        const dest = document.querySelector(".wiz-console.wiz-aspects");
        const els = createElement("div", [], {
          innerText: vault.aspects.effectDesc,
        });
        dest.append(els);
        break;
      }
      default: {
        return;
        break;
      }
    }
  });
  // handleConsoleTextAndHoverElements(c, classList, e));
};
const hoverOff = (e) => {
  const hoverEffects = ["hover-effect", "hover-effect-bg"];
  hoverEffects.forEach((effect) => {
    const divs = [...document.getElementsByClassName(effect)];
    divs.forEach((div) => div.classList.remove(effect));
  });

  const h = document.querySelector(".console-header");
  const b = document.querySelector(".console-body");
  clearParent(h);
  clearParent(b);
};
const clickAction = (e) => {
  const { skills, actions } = vault;
  const value = parseInt(e.target.value);
  const action = e.target.classList[2];
  const skill = e.target.classList[3];

  const title = `rolled ${skill} ${action}`;
  const body = [skills[skill].consoleText, actions[action]].consoleText;
  handleRoll(value);
};
const clickCharacterButton = (e) => {
  const i = e.srcElement.title;
  const targetChar = state.characters[parseInt(i)];
  renderCharacter(targetChar, i);
};
const clickNewChar = () => {
  document.querySelector(".wrapper").classList.toggle("hidden");
  document.querySelector(".wizard").classList.toggle("hidden");
};

// wiz funcs
const revealWizSpecs = () => {
  document
    .querySelector(".wiz-skill-pyramid-container.container")
    .classList.remove("wiz-hidden");
};
const clickWizNameNext = () => {
  const specsContainer = document.querySelector(
    ".wiz-specialization-container"
  );
  const nameBar = document.querySelector(".name-spec");
  const nameInput = document.querySelector(".char-name-input");
  if (!nameInput.value) return (nameBar.children[0].placeholder = "enter name");
  state.wizCharacter.name = nameBar.children[0].value;
  if (nameBar.children.length == 1)
    specsContainer.classList.remove("wiz-hidden");

  const specs = document.querySelector(".specializations");
  const selectedSpec = [...specs.children].filter(
    (spec) => ![...spec.classList].includes("inactive-spec")
  );
  if (selectedSpec.length != 1)
    return document
      .querySelector(".wiz-console.wiz-spec")
      .append("pick a class");
  state.wizCharacter.name = selectedSpec[0].innerText;
  const options = {
    innerText: selectedSpec[0].innerText,
    onclick: revealWizSpecs,
  };
  const chosenSpec = createElement("div", ["chosen-spec"], options);
  nameBar.append(chosenSpec);
  document
    .querySelector(".char-name-input-next-btn")
    .classList.add("wiz-hidden");
  specsContainer.classList.add("wiz-hidden");
  document
    .querySelector(".wiz-skill-pyramid-container.container")
    .classList.remove("wiz-hidden");
  document.querySelector(".wiz-btn.wiz-hidden").classList.remove("wiz-hidden");
};
const clickWizAddAspect = (e) => {
  const parent = e.path[2];

  const title = parent.children[1];
  if (!title.value) return (title.placeholder = "must have title");

  const description = parent.children[1];
  if (!description.value)
    return (description.placeholder = "must have a description");

  const effect1 = {
    skill: parent.children[3].children[0].value,
    action: parent.children[3].children[1].value,
    effect: 2,
    channel: parent.children[3].children[2].value,
    description: parent.children[4].value,
  };
  const effect2 = {
    skill: parent.children[5].children[0].value,
    action: parent.children[5].children[1].value,
    effect: -1,
    channel: parent.children[5].children[2]?.value,
    description: parent.children[6].value,
  };
  const aspect = {
    name,
    description,
    effects: [effect1, effect2],
  };
  if (!state.wizCharacter.aspects.filter((a) => a.name == title)[0]) {
    state.wizCharacter.aspects.push(aspect);
  }
  const aspectNameBtn = createElement("div", ["aspect-name-btn"], {
    innerText: title.value,
    onclick: "clickWizNameToggle(event)",
  });
  document.querySelector(".wiz-aspect-name-catcher").append(aspectNameBtn);
  toggleWizAspect([parent]);

  // handle when all aspects completed
  if (state.wizCharacter.aspects.length == 4) {
    document.querySelector(".wiz-btn.next").innerText = "confirm";
    document
      .querySelector(".wiz-aspects.wiz-console")
      .classList.add("wiz-hidden");
  }
};
const toggleWizAspect = (elArr) => {
  elArr.forEach((e, i) => e.classList.toggle("wiz-hidden"));
};
const clickWizClearAspect = () => {};
const clickWizNameToggle = (e) => {
  const name = e.target.innerText;
  const hidEl = [
    ...document.querySelectorAll(".wiz-aspect-input-area.wiz-hidden"),
  ].filter((el) => el.children[1].value == name);
  toggleWizAspect(hidEl);
  e.target.style.display = "none";
};
const wizBtnClick = (e) => {
  const name = e.target.innerText;

  switch (name) {
    case "next": {
      const bankLength =
        document.querySelector(".wiz-skill-bank").children.length;
      if (bankLength == 0) {
        document
          .querySelector(".wiz-skill-pyramid-container")
          .classList.add("wiz-hidden");
        document
          .querySelector(".wiz-aspect-container")
          .classList.remove("wiz-hidden");
        return;
      }
      const msg = createElement("div", [], {
        innerText: "place all skills to proceed",
      });
      const dest = document.querySelector(".wiz-console.wiz-skills");
      return dest.children.length == 0 && dest.append(msg);
      break;
    }
    case "back": {
      clickNewChar();
      break;
    }
    case "confirm": {
      const name = document.querySelector(".char-name-input").value;
      const specialization = document.querySelector(".chosen-spec").innerText;
      const { wizCharacter } = state;
      wizCharacter.name = name;
      wizCharacter.specialization = specialization;

      state.characters.push(wizCharacter);

      clickNewChar();
      const dest = document.querySelector(".hero-list");
      clearParent(dest);
      renderCharacterButtons(state.characters);
    }
  }
};
const handleRoll = (value) => {
  const values = [
    value,
    Math.floor(Math.random() * 3) - 1,
    Math.floor(Math.random() * 2) - 1,
  ];
  values.push(values.reduce((a, b) => a + b));
  const keys = ["modifier: ", "roll 1: ", "roll 2: ", "total: "];

  const els = values.map((val, i) =>
    createElement("div", ["roll-outcome"], { innerText: keys[i] + val })
  );
  const dest = document.querySelector(".roll-container");
  [...dest.children].forEach(
    (child) => child.classList[0] == "roll-data-container" && child.remove()
  );
  const div = createElement("div", ["roll-data-container"], {});
  els.forEach((el) => div.append(el));
  dest.append(div);
};

// drag n drop handlers
const allowDrop = (ev) => {
  ev.preventDefault();
};
const drag = (ev) => {
  ev.dataTransfer.setData("text", ev.target.id);
};
const drop = (ev) => {
  const target = ev.target;
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  const movedEl = document.getElementById(data);
  ev.target.appendChild(movedEl);

  const elId = ev.path[1].id;
  const str = elId.slice(0);
  const name = movedEl.innerText;
  const modifier = parseInt(str.replace("wiz-pyramid-", ""));

  if (state.wizCharacter.skills[name]?.length) {
    state.wizCharacter.skills[name].length = 0;
  }

  state.wizCharacter.skills[name]?.push(modifier);
  movedEl.innerText = movedEl.innerText + prependModifierCheck(modifier);
  target.ondrop = skillTableSwitcheroo;
};
const skillTableSwitcheroo = (e) => {
  console.log(e.dataTransfer.getData("text"));
};
// character funcs
const prependModifierCheck = (modifier) => {
  return modifier >= 0 ? `+${modifier}` : modifier;
};
const charHydrateSkillArrays = (skills, aspects, specialty) => {
  for (const skill in skills) {
    if (skills[skill].length == 5) continue;
    const actionCollector = {
      attack: 0,
      defend: 0,
      overcome: 0,
      support: 0,
    };

    // hydrate collector
    aspects?.forEach((aspect) => {
      aspect.effects.forEach((effect) => {
        if (effect.skill == skill) {
          actionCollector[effect.action] += effect.effect;
        }
      });
    });
    for (const action in actionCollector) {
      skills[skill].push(skills[skill][0] + actionCollector[action]);
    }
  }
};

// render funcs
const renderActionButtons = (skills, specialty) => {
  const cells = document.querySelectorAll(".action");
  cells?.forEach((cell) => {
    cell.onmouseover = hover;
    cell.onmouseleave = hoverOff;
    const action = cell.classList[1];
    const skill = cell.classList[2];
    if (!vault.specialties[specialty]) return;
    const specEffects = vault.specialties[specialty]?.effects;
    const specMod = specEffects[skill][action] ? specEffects[skill][action] : 0;
    let index = 0;
    switch (action) {
      case "attack":
        index = 1;
        break;
      case "defend":
        index = 2;
        break;
      case "overcome":
        index = 3;
        break;
      case "support":
        index = 4;
        break;
    }
    const modifier = skills[skill][index] + specMod;
    cell.children[0].innerText = "roll" + prependModifierCheck(modifier);
    cell.children[0].value = modifier;
    cell.children[0].onmouseleave = hoverOff;
    cell.children[0].classList.add(`r${modifier}`, action, skill, "btn");
    cell.children[0].onclick = clickAction;
  });
};
const renderCharacterBlock = (name, specialty, aspects) => {
  document.querySelector(".char-name").innerText = name;
  document.querySelector(".char-specialty").innerText = specialty;
  renderAspects(aspects);
};
const renderStuntsBlock = (stunts) => {
  const dest = document.querySelector(".stunt-btn-container");

  const classes = ["stunt-btn", "btn"];
  stunts.forEach((stunt) => {
    const options = {
      onmouseover: "hover(event)",
      onmouseleave: "hoverOff(event)",
      onclick: "clickStunt(event)",
      innerText: stunt.name,
    };
    const el = createElement("div", classes, options);
    dest.prepend(el);
  });
};
const renderAspects = (aspects) => {
  const dest = document.querySelector(".char-container__aspects");
  clearParent(dest);
  aspects.forEach((aspect, i) => {
    const classes = ["aspect"];
    aspect.effects.forEach((ef) =>
      classes.push(ef.action, ef.skill, ef.channel)
    );
    const filteredClasses = classes.filter((i) => i);
    const options = {
      onmouseover: "hover(event)",
      onmouseleave: "hoverOff(event)",
      onclick: "",
      value: i,
    };
    const el = createElement("div", filteredClasses, options);
    el.innerText = aspect.name;
    dest.append(el);
  });
};
const renderSkillPyramid = (skills) => {
  const rowElements = document.querySelectorAll(".skill-pyramid-row");
  rowElements.forEach((el) => clearParent(el));
  let rowIndex = 0;
  const sortedArray = Object.entries(skills).sort((a, b) => b[1][0] - a[1][0]);
  sortedArray.forEach((skill, i) => {
    const skillName = skill[0];
    const baseSkillValue = skills[skill[0]][0];
    const prevSkill = sortedArray[i - 1];
    const classes = ["skill", skillName, `r${baseSkillValue}`];
    const options = {
      onmouseover: hover,
      onmouseleave: hoverOff,
      onclick: "",
      value: baseSkillValue,
    };
    const el = createElement("div", classes, options);
    el.append(skillName, prependModifierCheck(baseSkillValue));
    if (prevSkill && baseSkillValue < prevSkill[1][0]) rowIndex++;
    rowElements[rowIndex].append(el);
  });
};
const renderCharacter = ({ name, specialty, aspects, skills, stunts }, i) => {
  charHydrateSkillArrays(skills, aspects, specialty);
  renderActionButtons(skills, specialty);
  renderCharacterBlock(name, specialty, aspects);
  renderStuntsBlock(stunts);
  renderSkillPyramid(skills);
  state.activeCharacterIndex = i;
};
const renderCharacterButtons = (characters) => {
  const dest = document.querySelector(".hero-list");
  characters.forEach((character, i) => {
    const classes = ["character-button"];
    const options = {
      title: `${i}`,
      onclick: `clickCharacterButton(event)`,
      innerText: character.name,
    };
    const el = createElement("div", classes, options);
    dest.prepend(el);
  });
};
renderCharacterButtons(state.characters);
renderCharacter(state.characters[0], 0);

// wiz funcs
const clickSpec = (e) => {
  e.target.classList.remove("inactive-spec");
  const name = e.target.innerText;
  const dest = [...document.querySelectorAll(".wiz-spec")];
  const filteredDest = dest.filter((el) => {
    if (
      ![...el.classList].includes(name) &&
      ![...el.classList].includes("wiz-console")
    )
      return el;
  });
  filteredDest.forEach((el) => el.classList.add("inactive-spec"));
};
const renderSpecialties = (vaultSpecs) => {
  const dest = document.querySelector(".specializations");
  for (const spec in vaultSpecs) {
    const classes = ["wiz-spec", spec, "btn"];
    const options = {
      onmouseover: "hover(event)",
      onmouseleave: "hoverOffWiz(event)",
      onclick: "clickSpec(event)",
      innerText: spec,
    };
    const div = createElement("div", classes, options);
    dest.append(div);
  }
};
renderSpecialties(vault.specialties);
