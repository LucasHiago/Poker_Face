import { generateDeck, deckOfCards, shuffle, freshDeck } from './cards.js';

describe('Generating a new deck of cards', () => {

  test('should generate a full deck of cards', () => {
    expect(generateDeck().length).toBe(52);
    expect(deckOfCards.length).toBe(52);
  });

  test('should contain all unique cards', () => {
    
    let randomCard = Math.floor(Math.random() * (10 - 2) + 2);
    let string = JSON.stringify(deckOfCards);
    let count = 0;
    let index = string.indexOf(`${randomCard}`);

    while (index !== -1) {
      count++;
      index = string.indexOf(`${randomCard}`, index + 1);
    }

    expect(count).toBe(4);
  });

  test('should shuffle a deck', () => {
    expect(deckOfCards[5].rank).toEqual(deckOfCards[5].rank);
    expect(deckOfCards[5].rank).not.toEqual(shuffle(deckOfCards)[5].rank);
    expect(deckOfCards[5].rank).not.toEqual(freshDeck[5].rank);
  });

  test('should generate random shuffles', () => {

    let freshlyFreshDeck = shuffle(deckOfCards);
    let firstDeckCard = freshDeck[3].suit + ', ' + freshDeck[3].rank;
    let secondDeckCard = freshlyFreshDeck[3].suit + ', ' + freshlyFreshDeck[3].rank;

    expect(firstDeckCard).not.toEqual(secondDeckCard);
  });
});