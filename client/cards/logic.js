
/* ===== Function to draw a card ===== */

const drawCard = (deck) => {
  return deck.pop();
};


/* ===== Function to draw five cards ===== */

const drawFiveCards = (deck, i = 5) => {

  let hand = [];

  for (i; i > 0; i--) {
    hand.push(drawCard(deck));
  }

  return hand;
};


/* ===== Function to change a card ===== */

const exchangeCard = (hand, index, deck) => {
  let updatedHand = hand.slice(0);
  updatedHand.splice(index, 1, drawCard(deck));
  return updatedHand;
};

module.exports = { drawCard, drawFiveCards, exchangeCard };