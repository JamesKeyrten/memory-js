// définir un tableau d'image valeur avec une clé name
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

const game = document.getElementById("game");
const grid = document.createElement("section");
// définir deux variables pour  stocker les 2 guess
let firstGuess = "";
let secondGuess = "";
//variable d'incrémentation du if pour seléctionner pas plus de 2 img
let count = 0;

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(cardsArray);

// inititialiser les cartes invisible pour l'utilisateur
function init() {
  // Ciblage
  grid.setAttribute("class", "grid");
  game.appendChild(grid);

  //itérer dans le tableau pour récup tout les dinos
  let gameGrid = cardsArray.concat(cardsArray);
  gameGrid.forEach((dino) => {
    //créer une div dans le DOM
    const card = document.createElement("div");
    // mettre une card dans une div
    card.classList.add("card");
    // associer l'attribu data-name à la div imagePaths
    card.dataset.name = dino.name;
    // bg img sur la div
    card.style.backgroundImage = `url(${dino.img})`;
    // ajouter la div avec le bg sur la grille
    grid.appendChild(card);
  });
}

init();

function clicked() {
  grid.addEventListener("click", function (event) {
    // cibler l'évènement clicked et on le stock dans une variable
    let clicked = event.target;

    // Si clicked est une <section>, alors clicked.nodeName vaudra 'SECTION'
    if (clicked.nodeName === "SECTION") {
      return;
    }
    //compteur pour seléctionner 2 éléments(pas plus)
    if (count < 2) {
      count++;
      if (count === 1) {
      // Assign first guess
      firstGuess = clicked.dataset.name
      clicked.classList.add('selected')
    } else {
      // Assign second guess
      secondGuess = clicked.dataset.name
      clicked.classList.add('selected')
    }
    // If both guesses are not empty...
    if (firstGuess !== '' && secondGuess !== '') {
      // and the first guess matches the second match...
      if (firstGuess === secondGuess) {
        // run the match function
        match()
      }
    }
  }
})
      // ajoute la class selected et applique le css correspondant
      clicked.classList.add("selected");
    }


clicked();

// Add match CSS
const match = () => {
  let selected = document.querySelectorAll('.selected')
  selected.forEach((card) => {
    card.classList.add('match')
  })
}
