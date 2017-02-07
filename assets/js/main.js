var cards = ["queen", "queen", "king", "king"]
var cardsInPlay = []

function createCards() {
  for (var i = 0; i<cards.length; i++) {
    var cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.setAttribute("data-card", cards[i]);
    document.querySelector("#game-board").appendChild(cardElement);
    cardElement.addEventListener("click", isTwoCards);
  }
}

function isMatch(){
  if (cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
  } else {
    alert("Sorry, try again.");
  }
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute("data-card"));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
