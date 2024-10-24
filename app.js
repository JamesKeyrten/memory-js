const cardsArray = [
  { name: "dino1", img: "img/1.jpg" },
  { name: "dino2", img: "img/2.jpg" },
  { name: "dino3", img: "img/3.jpg" },
  { name: "dino4", img: "img/4.jpg" },
  { name: "dino5", img: "img/5.jpg" },
  { name: "dino6", img: "img/6.jpg" },
  { name: "dino7", img: "img/7.jpg" },
  { name: "dino8", img: "img/8.jpg" },
  { name: "dino9", img: "img/9.jpg" },
  { name: "dino10", img: "img/10.jpg" },
];

<<<<<<< HEAD
let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());
=======
const game = document.getElementById("game");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);
>>>>>>> 901cc3e1ebedbd0f8abcefad339ea5c18d5c2219

let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
<<<<<<< HEAD
let delay = 1200;

const game = document.getElementById("game");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

function init() {
  gameGrid.forEach((dino) => {
    const { name, img } = dino;
=======

function init() {
  let gameGrid = cardsArray.concat(cardsArray);
  gameGrid.sort(() => 0.5 - Math.random());

  gameGrid.forEach((dino) => {
>>>>>>> 901cc3e1ebedbd0f8abcefad339ea5c18d5c2219
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = dino.name;

    const front = document.createElement("div");
    front.classList.add("front");
<<<<<<< HEAD
    card.dataset.name = name;

    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${img})`;
=======

    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${dino.img})`;
>>>>>>> 901cc3e1ebedbd0f8abcefad339ea5c18d5c2219

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
}
<<<<<<< HEAD
  init();
function match() {
  let selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");

  });
}

const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;
  previousTarget = null;

  let selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
   if (!card.classList.contains('match')) {
     card.classList.remove("selected");
   }

  });
};

grid.addEventListener("click", function (event) {
  let clicked = event.target;
  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected") ||
    clicked.parentNode.classList.contains("match")
  ) {
    return;
  }

  if (count < 2) {
    count++;
  }
  if (count === 1) {
    firstGuess = clicked.parentNode.dataset.name;
    console.log(firstGuess);
    clicked.parentNode.classList.add("selected");
  } else {
    secondGuess = clicked.parentNode.dataset.name;
    console.log(secondGuess);
    clicked.parentNode.classList.add("selected");
  }
  if (firstGuess && secondGuess) {
    if (firstGuess === secondGuess) {
      setTimeout(match, delay);
    }
    setTimeout(resetGuesses, delay);
  }
  previousTarget = clicked;
});
=======
init();

export const resetGuesses = () => {
  firstGuess = "";
  secondGuess = "";
  count = 0;

  let selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.remove("selected");
  });
};

grid.addEventListener("click", function (event) {
  let clicked = event.target;

  if (
    clicked.nodeName === "SECTION" ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains("selected")
  ) {
    return;
  }

  if (count < 2) {
    count++;
  }

  clicked.classList.add("selected");

  if (count === 1) {
    firstGuess = clicked.parentNode.dataset.name;
    console.log(firstGuess);
    clicked.parentNode.classList.add("selected");
  } else {
    secondGuess = clicked.parentNode.dataset.name;
    console.log(secondGuess);
    clicked.parentNode.classList.add("selected");
  }
  if (firstGuess !== "" && secondGuess !== "") {
    if (firstGuess === secondGuess) {
      match();
      resetGuesses();
    } else {
      setTimeout(() => {
        resetGuesses();
      }, 1000);
    }
  }
});

export function match() {
  let selected = document.querySelectorAll(".selected");
  selected.forEach((card) => {
    card.classList.add("match");
  });
}

let delayTime = 1200;
if (firstGuess === secondGuess) {
  setTimeout(match, delayTime);
  setTimeout(resetGuesses, delayTime);
} else {
  setTimeout(resetGuesses, delayTime);
}
>>>>>>> 901cc3e1ebedbd0f8abcefad339ea5c18d5c2219
