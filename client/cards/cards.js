
/* ===== Function to generate a deck of cards ===== */

let generateDeck = () => {
  
  // Array is used to implement Fisher-Yates shuffle
  let storage = [];
  
  // Variable with all the suits and ranks of a deck
  let cards = {
    suits: ['clubs', 'diamonds', 'hearts', 'spades'],
    ranks: ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen','king']
  };

  // Nested reverse for loops for a better performance
  // Quadratic at 52 operations is insignificant
  for (let s = cards.suits.length - 1; s >= 0; s--) {
    for (let r = cards.ranks.length -1; r >= 0; r--) {
      storage.push({ suit: cards.suits[s], rank: cards.ranks[r] });
    }
  }
  return storage;
}



/* ===== A full, sorted deck of cards ===== */

const output = generateDeck()
let deckOfCards = output.slice(0);



/*===== Fisher-Yates shuffle =====*/

const shuffle = ( i = 0, j = 0, temp = null) => {

  // Making a copy of a deck not to mutate it
  let shuffledDeck = deckOfCards.slice(0);
  
  // Algorithm to shuffle an array
  for (i = shuffledDeck.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = shuffledDeck[i];
    shuffledDeck[i] = shuffledDeck[j];
    shuffledDeck[j] = temp;
  }

  return shuffledDeck;
}



/*===== Shuffled Deck that we will be using ===== */

const freshDeck = shuffle(deckOfCards);

module.exports = { generateDeck, deckOfCards, shuffle, freshDeck };