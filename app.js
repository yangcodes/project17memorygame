const cards = document.querySelectorAll(".memory-card");

let cardsIsFlipped = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard == true) return;
  if (this === firstCard) return;

  //this.classList.toggle("flip");
  this.classList.toggle("flip");

  if (!cardsIsFlipped) {
    // first click -> first card
    cardsIsFlipped = true;
    firstCard = this;
    return;
  }
  //second click -> second card
  cardsIsFlipped = false;
  secondCard = this;

  checkForMatch();
  // checking whether the cards match
  // console.log(firstCard.dataset.name);
  //console.log(secondCard.dataset.name);
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
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [cardIsFlipped, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
