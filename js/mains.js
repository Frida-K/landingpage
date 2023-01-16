const logo = document.querySelector(".logo");
const titre = document.querySelector(".marketing h1");
const sTitre = document.querySelector(".marketing h2");
const txt = document.querySelector("p");
const actions = document.querySelector(".actions");

const imgpodcast = document.querySelector(".podcast");
const liens = document.querySelector(".liens");

const TL1 = new TimelineMax({ paused: true });

TL1.from(logo, { y: -50, opacity: 0 })
  .from(titre, 1, { y: -100, opacity: 0, duration: 0.5 })
  .from(sTitre, 1, { opacity: 0 }, "-=0.4")
  .from(txt, 1, { opacity: 0 }, "-=0.4")
  .from(actions, 1, { opacity: 0 }, "-=0.5")
  .from(imgpodcast, 1, { x: 100, opacity: 0 }, "-=0.5")
  .staggerFrom(liens, 1, { y: -50, opacity: 0 }, 0.3, "-=0.6");

TL1.play();
