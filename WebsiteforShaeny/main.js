// Editable content area
// You can safely edit the arrays below to personalize the page.
const appContent = {
  apologyParagraphs: [
    "Sayang, I've been thinking about last night, and I really am sorry.",
    "I know I hurt you, and I don't want to brush that aside or pretend that everything is okay just because I wish it were.",
    "When you needed comfort from me, I struggled. Instead of staying patient and continuing to try to understand what you needed, I gave up too soon. I can understand why that would hurt, especially when you've always tried so hard to be there for me.",
    "You've comforted me through my difficult moments. You've stayed with me when I wasn't okay, even when it took time for me to feel better. You didn't have to make all my feelings disappear immediately for your comfort to mean something to me. Simply having you there mattered.",
    "And last night, when you were the one who needed that care, I didn't give you what you deserved. Somehow, you ended up comforting me again, even though you were hurting too.",
    "I'm sorry, sayang. You deserved to be heard, understood, and cared for. You deserved to have someone stay beside you without making you feel like your feelings were too difficult to handle.",
    "I also want to be honest about something. I don't always know the right thing to say. Sometimes I get overwhelmed because I want to make things better and don't know how, but I don't want to use that as an excuse to give up on you. I want to learn how to listen, how to be patient, and how to stay with you even when I cannot fix everything straight away.",
    "You shouldn't have to hide your sadness to make things easier for me. You shouldn't have to comfort me just because I'm struggling with the fact that I've hurt you. Your feelings deserve space too, and I want to become better at giving you that space.",
    "I love you for being you, sayang. Not just because you take care of me, not just because you make me feel loved, and not just because you know how to comfort me. I love you as the person you are, with your own feelings, your own difficult days, your own little happinesses, and everything that makes you uniquely you.",
    "I know a website and a letter cannot undo what happened. I'm not asking you to forget it or feel better before you're ready.",
    "I just want you to know that I'm sorry, that I appreciate you more than I sometimes know how to express, and that I want my actions to become a better reflection of the love I have for you.",
    "I want to learn to be the person who stays, listens, and tries again, even when I don't immediately know how to help.",
    "You deserve that kind of love too, my sayang.",
    "I love you. And I'm sorry. ♡"
  ],
  loveNotes: [
    {
      title: "your smile ♡",
      message: "there is something about your smile that makes ordinary moments feel a little more special. I hope life gives you plenty of reasons to smile, and I hope I can be part of those reasons too."
    },
    {
      title: "the way you make things feel softer",
      message: "you have a way of making me feel less alone when things get difficult. I appreciate the patience and warmth you've shown me more than I can explain. I want to learn to give you that same feeling of being cared for."
    },
    {
      title: "your gentle heart",
      message: "I appreciate how much care you give to the people you love. but I also want you to remember that you deserve kindness on the days when you don't have the energy to give it to anyone else."
    },
    {
      title: "all the little things that make you.. you",
      message: "it's not only the big things that make me love you. it's the little details, your personality, your way of expressing yourself, and all the things that make you different from anyone else. I want to keep discovering and appreciating them."
    },
    {
      title: "you deserve comfort too",
      message: "you don't always have to be the strong one. you don't have to know how to fix everything. and you don't have to take care of my feelings before you can express your own. I want you to have room to be cared for, too."
    },
    {
      title: "still learning, still choosing us",
      message: "I know love isn't just about saying the right things when everything is good. it's also about listening, taking responsibility, learning from difficult moments, and trying to do better. I want to keep growing with you, one step at a time."
    }
  ],
  heartMessages: [
    "Sending you the softest little hug, sayang ♡",
    "You deserve the same patience you give to others.",
    "You don't have to hide your feelings from me.",
    "I want to learn how to listen better, even when I don't know what to say.",
    "You are loved for being you, not for always being okay.",
    "I hope I can make your difficult days feel a little less lonely.",
    "You deserve gentleness, care, and understanding too.",
    "One little reminder: you matter so much to me.",
    "I can't promise to always know the right words, but I want to keep trying.",
    "I love you, my sayang. even on the difficult days. ♡"
  ],
  promises: [
    {
      title: "listen before trying to fix everything",
      description: "I want to listen to what you're feeling before rushing to find a solution. sometimes you might not need me to fix anything. you might just need me to understand."
    },
    {
      title: "ask what you need",
      description: "when I'm unsure how to comfort you, I want to ask whether you need advice, reassurance, a little space, or simply someone to stay and listen."
    },
    {
      title: "be patient",
      description: "I want to remember that feelings don't always disappear quickly. I don't need to solve everything in a few minutes to make being there for you worthwhile."
    },
    {
      title: "take responsibility",
      description: "when I've hurt you, I want to focus on understanding your feelings and taking responsibility instead of turning the moment into one where you have to comfort me."
    }
  ],
  optionalMemory: {
    title: "",
    text: ""
  },
  finalMessage: {
    heading: "for you, always ♡",
    signature: "your sayang ♡"
  }
};

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let previousHeartIndex = -1;

function renderLetter() {
  const letterBody = document.getElementById("letterBody");
  if (!letterBody) return;

  letterBody.innerHTML = "";

  appContent.apologyParagraphs.forEach((paragraph) => {
    const paragraphElement = document.createElement("p");
    paragraphElement.textContent = paragraph;
    letterBody.appendChild(paragraphElement);
  });
}

function renderLoveNotes() {
  const grid = document.getElementById("loveNotesGrid");
  if (!grid) return;

  grid.innerHTML = appContent.loveNotes
    .map(
      (note, index) => `
        <button
          class="love-card"
          type="button"
          aria-expanded="false"
          aria-controls="love-note-panel-${index}"
          data-card-index="${index}"
        >
          <span class="card-inner">
            <span class="card-face card-front" aria-hidden="false">
              <span class="card-tag">little note</span>
              <span class="card-title">${note.title}</span>
            </span>
            <span class="card-face card-back" aria-hidden="true" id="love-note-panel-${index}">
              <span class="card-message">${note.message}</span>
            </span>
          </span>
        </button>
      `
    )
    .join("");

  const cards = document.querySelectorAll(".love-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const isOpen = card.classList.contains("is-open");
      card.classList.toggle("is-open", !isOpen);
      card.setAttribute("aria-expanded", String(!isOpen));

      const front = card.querySelector(".card-front");
      const back = card.querySelector(".card-back");

      if (front && back) {
        front.setAttribute("aria-hidden", String(!isOpen));
        back.setAttribute("aria-hidden", String(isOpen));
      }
    });
  });
}

function renderPromises() {
  const promisesGrid = document.getElementById("promisesGrid");
  if (!promisesGrid) return;

  promisesGrid.innerHTML = appContent.promises
    .map(
      (promise) => `
        <article class="promise-card" data-reveal>
          <h3>${promise.title}</h3>
          <p>${promise.description}</p>
        </article>
      `
    )
    .join("");
}

function renderOptionalMemory() {
  const memorySection = document.getElementById("memory");
  const memoryContent = document.getElementById("memoryContent");

  if (!memorySection || !memoryContent) return;

  const { title, text } = appContent.optionalMemory;
  if (title && text) {
    memoryContent.innerHTML = `
      <h3>${title}</h3>
      <p>${text}</p>
    `;
    memorySection.hidden = false;
  } else {
    memorySection.hidden = true;
  }
}

function setupWelcomeInteraction() {
  const hero = document.querySelector(".hero");
  const openLetterBtn = document.getElementById("openLetterBtn");
  const replayLetterBtn = document.getElementById("replayLetterBtn");
  const letter = document.getElementById("letter");

  if (!hero || !openLetterBtn || !letter) return;

  const openLetter = () => {
    if (openLetterBtn.dataset.busy === "true") return;

    openLetterBtn.dataset.busy = "true";
    hero.classList.add("is-open");
    openLetterBtn.classList.add("is-pressed");

    setTimeout(() => {
      openLetterBtn.dataset.busy = "false";
      openLetterBtn.classList.remove("is-pressed");
    }, 180);

    setTimeout(() => {
      const preferredBehavior = reducedMotion ? "auto" : "smooth";
      letter.scrollIntoView({ behavior: preferredBehavior, block: "start" });
    }, reducedMotion ? 0 : 420);
  };

  openLetterBtn.addEventListener("click", openLetter);

  if (replayLetterBtn) {
    replayLetterBtn.addEventListener("click", () => {
      replayLetterBtn.classList.add("is-pressed");
      letter.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "center" });
      window.setTimeout(() => replayLetterBtn.classList.remove("is-pressed"), 180);
    });
  }
}

function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = [...document.querySelectorAll("main section[id]")];

  if (navLinks.length === 0 || sections.length === 0) return;

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const target = targetId ? document.querySelector(targetId) : null;
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
    });
  });

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);
      if (visibleEntries.length === 0) return;

      const activeSection = visibleEntries[0].target;
      const id = activeSection.getAttribute("id");

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${id}`;
        link.classList.toggle("active", isActive);
      });
    },
    {
      rootMargin: "-40% 0px -45% 0px",
      threshold: 0.2
    }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function setupRevealOnScroll() {
  const revealItems = document.querySelectorAll("[data-reveal]");
  if (!revealItems.length) return;

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
}

function createParticleBurst(container, count = 9, burstClass = "heart-burst") {
  if (!container) return;

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < count; i += 1) {
    const sparkle = document.createElement("span");
    sparkle.className = burstClass;
    sparkle.style.left = `${50 + (Math.random() * 28 - 14)}%`;
    sparkle.style.top = `${50 + (Math.random() * 28 - 14)}%`;
    sparkle.style.setProperty("--tx", `${(Math.random() * 110 - 55).toFixed(2)}px`);
    sparkle.style.setProperty("--ty", `${(-Math.random() * 120 - 5).toFixed(2)}px`);
    sparkle.style.opacity = "0.88";
    sparkle.style.background = i % 2 === 0 ? "rgba(201, 121, 148, 0.8)" : "rgba(255,255,255,0.75)";
    fragment.appendChild(sparkle);
  }

  container.appendChild(fragment);

  window.setTimeout(() => {
    container.querySelectorAll(`.${burstClass}`).forEach((particle) => particle.remove());
  }, 1000);
}

function setupHeartInteraction() {
  const heartButton = document.getElementById("heartReminderBtn");
  const reminderMessage = document.getElementById("reminderMessage");
  const heartStage = document.querySelector(".heart-stage");

  if (!heartButton || !reminderMessage || !heartStage) return;

  const getNextMessageIndex = () => {
    if (appContent.heartMessages.length === 1) return 0;

    let nextIndex = Math.floor(Math.random() * appContent.heartMessages.length);
    while (nextIndex === previousHeartIndex) {
      nextIndex = Math.floor(Math.random() * appContent.heartMessages.length);
    }

    previousHeartIndex = nextIndex;
    return nextIndex;
  };

  heartButton.addEventListener("click", () => {
    if (heartButton.dataset.busy === "true") return;

    heartButton.dataset.busy = "true";
    heartButton.classList.remove("is-pulsing");
    void heartButton.offsetWidth;
    heartButton.classList.add("is-pulsing");

    createParticleBurst(heartStage, 10, "heart-burst");
    reminderMessage.textContent = appContent.heartMessages[getNextMessageIndex()];

    window.setTimeout(() => {
      heartButton.classList.remove("is-pulsing");
      heartButton.dataset.busy = "false";
    }, 420);
  });
}

function setupFinalHug() {
  const hugButton = document.getElementById("hugBtn");
  const hugOutput = document.getElementById("hugOutput");
  const finalScene = document.querySelector(".final-scene");

  if (!hugButton || !hugOutput || !finalScene) return;

  hugButton.addEventListener("click", () => {
    if (hugButton.dataset.busy === "true") return;

    hugButton.dataset.busy = "true";
    hugButton.classList.add("is-pressed");
    finalScene.classList.add("is-warm");
    hugOutput.classList.remove("is-visible");
    hugOutput.setAttribute("aria-hidden", "false");
    void hugOutput.offsetWidth;
    hugOutput.classList.add("is-visible");
    createParticleBurst(finalScene, 12, "heart-burst");

    window.setTimeout(() => {
      hugButton.classList.remove("is-pressed");
      hugButton.dataset.busy = "false";
      finalScene.classList.remove("is-warm");
    }, 700);
  });
}

function init() {
  renderLetter();
  renderLoveNotes();
  renderPromises();
  renderOptionalMemory();
  setupWelcomeInteraction();
  setupNavigation();
  setupRevealOnScroll();
  setupHeartInteraction();
  setupFinalHug();

  if (reducedMotion) {
    document.body.classList.add("reduced-motion");
  }
}

init();
