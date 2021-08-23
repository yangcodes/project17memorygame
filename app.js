const cards = document.querySelectorAll(".memory-card");

let cardsIsFlipped = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle("flip");

  if (!cardsIsFlipped) {
    // first click -> first card
    cardsIsFlipped = true;
    firstCard = this;
  } else {
    //second click -> second card
    cardsIsFlipped = false;
    secondCard = this;
    // checking whether the cards match
    // console.log(firstCard.dataset.name);
    //console.log(secondCard.dataset.name);
    if (firstCard.dataset.name === secondCard.dataset.name) {
      // it it a match -> disable the cards
      firstCard.removeEventListener("click", flipCard);
      secondCard.removeEventListener("click", flipCard);
    } else {
      //not a match -> unflip the card
      setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
      }, 1500);
    }
  }
}

cards.forEach(function (card) {
  card.addEventListener("click", flipCard);
});
