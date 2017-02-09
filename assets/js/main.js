var cards = ["queen-red", "queen-black", "king-red", "king-black"]
var cardsInPlay = []

function createCards() {
  for (var i = 0; i<cards.length; i++) {
    var cardElement = document.createElement("div");
    cardElement.className = "card back";
    cardElement.setAttribute("cardData", cards[i]);
    if ((cards[i] === "queen-red") || (cards[i] === "queen-black")) {
      cardElement.setAttribute ("cardFace", "queen");
    }
    else if ((cards[i] === "king-red") || (cards[i] === "king-black")) {
      cardElement.setAttribute ("cardFace", "king");
    }
    document.querySelector("#game-board").appendChild(cardElement);
    cardElement.addEventListener("click", isTwoCards);
  }
}

function isMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function isTwoCards() {
  this.className = `card ${this.getAttribute("cardData")}`;
  cardsInPlay.push(this.getAttribute("cardFace"));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
