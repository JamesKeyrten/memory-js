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

let gameGrid = cardsArray.concat(cardsArray);
gameGrid.sort(() => 0.5 - Math.random());

let firstGuess = "";
let secondGuess = "";
let count = 0;
let previousTarget = null;
let delay = 1200;

const game = document.getElementById("game");
const grid = document.createElement("section");
grid.setAttribute("class", "grid");
game.appendChild(grid);

function init() {
  gameGrid.forEach((dino) => {
    const { name, img } = dino;
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = dino.name;

    const front = document.createElement("div");
    front.classList.add("front");
    card.dataset.name = name;

    const back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = `url(${img})`;

    grid.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
  });
}
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
    if (!card.classList.contains("match")) {
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
