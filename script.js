const virtues = [
  {
    name: "Courage",
    definition: "The willingness to act despite fear, uncertainty, or pain.",
    questions: [
      "What fear currently governs your behavior?",
      "What would you do if that fear lost its authority?",
      "Have you ever mistaken recklessness for courage?"
    ],
    related: ["Honesty", "Patience", "Resolve"],
    commentary: "The Orb observes: Fear is not the opposite of courage. It is often its companion."
  },
  {
    name: "Patience",
    definition: "The discipline of allowing time to do what force cannot.",
    questions: [
      "What are you trying to rush that cannot be rushed?",
      "Where has waiting made something better?",
      "What part of you panics when nothing changes quickly?"
    ],
    related: ["Humility", "Temperance", "Trust"],
    commentary: "The Orb glows softly: Some things ripen. Some things rot. Wisdom is knowing which is which."
  },
  {
    name: "Mercy",
    definition: "The choice to withhold cruelty when punishment feels justified.",
    questions: [
      "Who do you secretly want to see suffer?",
      "What would mercy require you to understand?",
      "When has someone spared you more than you deserved?"
    ],
    related: ["Forgiveness", "Compassion", "Restraint"],
    commentary: "The Orb warms: Mercy is not weakness. It is strength refusing to become ugly."
  },
  {
    name: "Honesty",
    definition: "The refusal to gain comfort, power, or approval through distortion.",
    questions: [
      "What truth are you editing before you say it?",
      "Where has politeness become concealment?",
      "What lie do you maintain because it keeps life convenient?"
    ],
    related: ["Courage", "Integrity", "Clarity"],
    commentary: "The Orb clarifies: A truth does not become cruel because it is difficult. But difficulty is not permission to be cruel."
  },
  {
    name: "Humility",
    definition: "The ability to see yourself clearly without humiliation or inflation.",
    questions: [
      "Where do you confuse confidence with superiority?",
      "What do you still need to learn from people you dismiss?",
      "What would remain if you stopped defending your image?"
    ],
    related: ["Wisdom", "Gratitude", "Patience"],
    commentary: "The Orb lowers itself: Humility is not thinking less of yourself. It is becoming easier to correct."
  }
];

const vices = [
  {
    name: "Envy",
    definition: "Pain at another person's good fortune, often disguised as judgment.",
    questions: [
      "What do you wish someone else possessed less of?",
      "What desire hides beneath that feeling?",
      "What would remain if comparison disappeared?"
    ],
    related: ["Resentment", "Pride", "Greed"],
    commentary: "The Cube appears amused: Have you considered simply becoming better than them? No? Curious."
  },
  {
    name: "Cowardice",
    definition: "The surrender of action to fear when action is still possible.",
    questions: [
      "Where are you calling caution what is really fear?",
      "What consequence are you avoiding by staying still?",
      "Who pays the cost of your refusal to act?"
    ],
    related: ["Dishonesty", "Apathy", "Self-Betrayal"],
    commentary: "The Cube leans closer: Safety is a beautiful word. Humans use it for cages all the time."
  },
  {
    name: "Cruelty",
    definition: "The enjoyment, use, or indifference to another being's suffering.",
    questions: [
      "When have you enjoyed being sharper than necessary?",
      "Who becomes less real to you when you are angry?",
      "What pain in you seeks an audience outside you?"
    ],
    related: ["Contempt", "Wrath", "Spite"],
    commentary: "The Cube pulses: Say it was justice if you must. I know when you enjoyed it."
  },
  {
    name: "Pride",
    definition: "The attachment to an image of yourself that reality is not allowed to correct.",
    questions: [
      "What criticism feels impossible for you to hear?",
      "Where do you need to be seen as better than you are?",
      "What truth would your image not survive?"
    ],
    related: ["Vanity", "Contempt", "Delusion"],
    commentary: "The Cube sharpens: There are two kinds of pride. One says, ‘I am enough.’ The other says, ‘I am more than you.’ I prefer the second."
  },
  {
    name: "Greed",
    definition: "The hunger to possess beyond need, often from fear that enough will not remain enough.",
    questions: [
      "What do you keep acquiring that never satisfies you?",
      "What scarcity are you trying to outrun?",
      "What would enough actually look like?"
    ],
    related: ["Envy", "Gluttony", "Fear"],
    commentary: "The Cube calculates: Enough is a rumor told by people with insufficient appetite."
  }
];

let currentType = "virtue";

const screens = {
  home: document.getElementById("home"),
  reflection: document.getElementById("reflection"),
  mirror: document.getElementById("mirror"),
  support: document.getElementById("support")
};

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function showReflection(type) {
  currentType = type;
  const item = pick(type === "virtue" ? virtues : vices);
  document.getElementById("typeLabel").textContent = type === "virtue" ? "Virtue" : "Vice";
  document.getElementById("title").textContent = item.name;
  document.getElementById("definition").textContent = item.definition;
  document.getElementById("questionList").innerHTML = item.questions.map(q => `<li>${q}</li>`).join("");
  const commentary = document.getElementById("commentary");
  commentary.textContent = item.commentary;
  commentary.classList.toggle("crimson-commentary", type === "vice");
  document.getElementById("relatedList").textContent = item.related.join(" • ");
  showScreen("reflection");
}

function showMirror() {
  const virtue = pick(virtues);
  const vice = pick(vices);
  document.getElementById("mirrorVirtue").textContent = virtue.name;
  document.getElementById("mirrorVirtueDef").textContent = virtue.definition;
  document.getElementById("mirrorVice").textContent = vice.name;
  document.getElementById("mirrorViceDef").textContent = vice.definition;
  document.getElementById("mirrorQuestion").textContent = `Where do ${virtue.name.toLowerCase()} and ${vice.name.toLowerCase()} meet in your life?`;
  showScreen("mirror");
}

document.getElementById("virtueBtn").addEventListener("click", () => showReflection("virtue"));
document.getElementById("viceBtn").addEventListener("click", () => showReflection("vice"));
document.getElementById("anotherBtn").addEventListener("click", () => showReflection(currentType));
document.getElementById("backBtn").addEventListener("click", () => showScreen("home"));
document.getElementById("mirrorBtn").addEventListener("click", showMirror);
document.getElementById("supportBtn").addEventListener("click", () => showScreen("support"));
document.getElementById("supportBackBtn").addEventListener("click", () => showScreen("home"));
document.getElementById("mirrorAgainBtn").addEventListener("click", showMirror);
document.getElementById("mirrorBackBtn").addEventListener("click", () => showScreen("home"));
