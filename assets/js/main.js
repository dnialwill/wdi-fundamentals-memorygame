var cards = ["queen-red", "queen-black", "king-red", "king-black"]
var cardsInPlay = []

window.onload = function createCards() {
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
    document.querySelector("#reset").addEventListener("click", resetBoard);
  }
}

function resetBoard() {
  var nodes = document.querySelector("#game-board").childNodes;
  for (var i=0; i<nodes.length; i++) {
      nodes[i].className = "card back";
  }
  document.querySelector("#status").innerHTML = "Pick a card... any card!"
}

function isMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    document.querySelector("#status").innerHTML = "You found a match!"
  } else {
    document.querySelector("#status").innerHTML = "Sorry, try again."
  }
  // setTimeout(resetBoard(), 3000);
}

function isTwoCards() {
  this.className = `card ${this.getAttribute("cardData")}`;
  cardsInPlay.push(this.getAttribute("cardFace"));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}
