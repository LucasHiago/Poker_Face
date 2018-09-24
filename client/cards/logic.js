
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


/* ===== Function to calculate the game ===== */

const judge = (hand, sorted = true, pairs = false, storage = {}) => {
  
  // replace faces with numbers
  hand.map((card) => {
    card.rank === 'J' && (card.rank = '11');
    card.rank === 'Q' && (card.rank = '12');
    card.rank === 'K' && (card.rank = '13');
    card.rank === 'A' && (card.rank = '14');
  });
  
  // check for pairs and straights  
  for ( let i = 0; i < hand.length; i++) {

    let inQuestion = hand[i].rank
    storage[inQuestion] === 1 ? (pairs = true) : (storage[inQuestion] = 1);
    if (i !== hand.length - 1) {
      (hand[i].rank > hand[i+1].rank) && (sorted = false)
    }
  }

  // output string result
  return (
    sorted === true
    ? 
    'straight'
    :
    ((pairs === true)
    ?
    'pair'
    :
    'not a winner'
    )
  )

  };

  module.exports = { drawCard, drawFiveCards, exchangeCard, judge };