const gameContainer = document.getElementById("game");
let card1 = null;
let card2 = null;
let Score = 0;
let noClicking = false;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "black",
  "black",
  "brown",
  "brown",
  "Teal",
  "Teal",
  "turquoise",
  "turquoise",

];

function shuffle(array) {
  let counter = array.length;


  while (counter > 0) {

    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", color)
    
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

// console.log(document.querySelector('#color'))

function handleCardClick(e) {
  if (noClicking) return;
  if (e.target.classList.contains("flipped")) return;


  let currentCard = e.target;
  currentCard.style.backgroundColor = currentCard.id;

  console.dir(e.target)

  if (!card1 || !card2)
    currentCard.classList.add("flipped");

  if (card1 === null)
    card1 = currentCard

  if (currentCard != card1 && card1 != null && card2 === null) {
    card2 = currentCard;
  } else {
    card2 === null
  }

  if (card1 && card2) {
    noClicking = true;
    let flippedCard1 = card1.id;
    let flippedCard2 = card2.id;


    if (flippedCard1 === flippedCard2) {
      Score += 2;
      card1.removeEventListener("click", handleCardClick);
      card2.removeEventListener("click", handleCardClick);
      card1 = null;
      card2 = null;
      noClicking = false;
    } else {
      setTimeout(function () {
        card1.style.backgroundColor = "";
        card2.style.backgroundColor = "";
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1 = null;
        card2 = null;
        noClicking = false;
      }, 1000);
    }
  }

  if (Score === COLORS.length) alert("game over!");
}

createDivsForColors(shuffledColors);
