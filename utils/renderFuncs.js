// import {characters} from "../mocks/data";
const characters = [
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
];

//accepts CLASS[], {ATTRIBUTE: VALUE}, {EVENT: HANDLER},
const createElement = (classes, attr, ev, type = "div") => {
  const el = document.createElement(type);
  //add classes
  typeof classes == "string" && el.classList.add(classes);
  Array.isArray(classes) && classes.forEach((cl) => el.classList.add(cl));
  //add atttributes
  attr = attr || {};
  for (let at in attr) {
    attr.hasOwnProperty(at) && el.setAttribute(at, attr[at]);
  }
  //add event handlers
  ev = ev || {};
  for (let event in ev) {
    const handler = ev[event];
    el.addEventListener(event, handler);
  }
  return el;
};
const clearParent = (parent) => {
  if (!parent) return;
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const renderCharacterButtons = (characters) => {
  const dest = document.querySelector(".hero-list");
  //clear any existing chars
  const children = [...dest.children];
  children.forEach((el) => el.innerHTML != "+" && el.remove);
  const handlers = {
    click: clickCharacterButton,
    mouseover: hover,
    mouseout: hoverOff,
  };
  characters.forEach((char) => {
    const attr = { innerText: char.name };
    const el = createElement("char btn", attr, handlers);
    dest.prepend(el);
  });
};

const renderCharacterHeader = (name, specialty) => {
  document.querySelector(".char-name").innerText = name;
  document.querySelector(".char-specialty").innerText = specialty;
};
const renderAspects = (aspects) => {
  const dest = document.querySelector(".char-container__aspects");
  clearParent(dest);
  
  const classes = "aspect btn edit";
  const handlers = {
    mouseover: hover,
    mouseout: hoverOff,
  };
  aspects.forEach((a) => {
    const attr = { innerText: a.name };
    const el = createElement(classes, attr, handlers);
    dest.append(el);
  });
};
const renderStunts = (stunts) => {
  const dest = document.querySelector(".stunt-btn-container");
  clearParent(dest);

  const classes = "stunt btn edit";
  const handlers = {
    mouseover: hover,
    mouseout: hoverOff,
  };
  stunts.forEach((st) => {
    handlers.click = handleStuntClick(st.name);
    const attr = { innerText: st.name };
    const el = createElement(classes, attr, handlers);
    dest.append(el);
  });
};
const renderSkills = (skills) => {};
const renderActions = (skills) => {};
const renderInventory = () => {};
