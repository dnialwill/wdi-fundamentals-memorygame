var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
var cardMax = 4;

function createCards() {
  for (var cardCount = 1; cardCount<=cardMax; cardCount++) {
    var cardNew = document.createElement("div");
    cardNew.setAttribute("class", "card");
    document.querySelector('#game-board').appendChild(cardNew);
  }
}

// if (cardTwo === cardFour){
//   alert('You found a match!');
// } else {
//   alert('Sorry, try again.');
// }
