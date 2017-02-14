var cards = ["queen-red", "queen-black", "king-red", "king-black"]; // Card pool
var cardsInPlay; // Declare var cards in play
var board = document.querySelector("#game-board"); // Declares game-board
var status = document.querySelector("#status"); // Declares status message, should work but it doesn't???
var reset = document.querySelector("#reset"); // Declares reset button

function createCards() { // Card creation
  cardsInPlay = []; // Initialize playing field
  document.querySelector("#status").innerHTML = "Pick a card... any card!"; // Initialize status bar, replace querySelector with var when I figure it out
  for (var i = 0; i<cards.length; i++) { // Creates cards based on cards array length
    var cardElement = document.createElement("div"); // Makes divs for cards
    cardElement.className = "card back"; // Assigns CSS classes for styling
    cardElement.setAttribute("cardData", cards[i]); // Not sure if data-type totally necessary, but included here per instructions
    if ((cards[i] === "queen-red") || (cards[i] === "queen-black")) { // Assigns face data for isMatch()
      cardElement.setAttribute ("cardFace", "queen");
    }
    else if ((cards[i] === "king-red") || (cards[i] === "king-black")) {
      cardElement.setAttribute ("cardFace", "king");
    }
    board.appendChild(cardElement); // Adds cards to the game-board
    if (i === cards.length/2) { // Makes layout square
      var clear = document.createElement("br"); // by adding line break
      board.insertBefore(clear, cardElement); // halfway through the loop
    }
    cardElement.addEventListener("click", isTwoCards); // Adds event listener to "flip" cards on click
  } reset.addEventListener("click", resetBoard); // Enables reset button
}

function shuffle(a) { // Shuffle function found at http://http://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

window.onload = shuffle(cards); // Shuffles cards on load
window.onload = createCards(); // Card creation on load

function resetBoard() { // Reset the board
  var numberOfCards = board.childNodes.length; // Counts cards on board
  for (var i=0; i<numberOfCards; i++) { // Removes cards
    board.removeChild(board.firstChild);
    if (document.querySelector(".card") == null) { // Creates new cards when board is clear
      shuffle(cards);
      createCards();
    }
  }
}

function isMatch() { // Does it match?????????????????????????
  var cardList = board.childNodes; // Makes a nodelist, dunno if I can do this in createCards()
  if (cardsInPlay[0] === cardsInPlay[1]) { // Compares face value of played cards
    document.querySelector("#status").innerHTML = "You found a match!"; // Yay
  } else {
    document.querySelector("#status").innerHTML = "Sorry, try again."; // Boo
  } for (var i=0; i<cardList.length; i++) { // Only two cards can be played, cheater
    cardList[i].removeEventListener("click", isTwoCards);
  }
}

function isTwoCards() { // I should probably rename this
  this.removeEventListener("click", isTwoCards); // Can't play the same card twice
  this.className = `card ${this.getAttribute("cardData")}`; // Assigns CSS classes for proper image
  cardsInPlay.push(this.getAttribute("cardFace")); // Puts the card "in play"
  if (cardsInPlay.length === 2) { // Checks for matches when two cards are played
    isMatch(cardsInPlay);
  }
}
