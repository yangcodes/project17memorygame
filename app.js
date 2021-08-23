const cards = document.querySelectorAll(".memory-card");

let cardsIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;

  //this.classList.toggle("flip");
  this.classList.toggle("flip");

  if (!cardsIsFlipped) {
    // first click -> first card
    cardsIsFlipped = true;
    firstCard = this;
  } else {
    //second click -> second card
    cardsIsFlipped = false;
    secondCard = this;

    checkForMatch();
    // checking whether the cards match
    // console.log(firstCard.dataset.name);
    //console.log(secondCard.dataset.name);
  }
}

function checkForMatch() {
  let isMatched = firstCard.dataset.name === secondCard.dataset.name;
  isMatched ? disableCards() : unflipCards();
  /* if (firstCard.dataset.name === secondCard.dataset.name) {
    disableCards();
    // it it a match -> disable the cards
  } else {
    //not a match -> unflip the card
    unflipCards();
  } */
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
  }, 1500);
}

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
