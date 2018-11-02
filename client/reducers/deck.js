import { deckOfCards, shuffle } from '../cards/cards';

const deck = (state = [], action) => {
  
  switch(action.type) {

    case 'SHUFFLE_DECK' :
      return [
        ...shuffle()
      ]

    case 'DISPATCH_CARD':

      let updatedDeck = [...state];

      for (let i = action.times; i > 0; i--) {
        updatedDeck.pop()
      }

      return [
        ...updatedDeck
      ]


    default: 
      return state;
  }
};

export default deck;