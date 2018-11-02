import { createStore } from 'redux';

// Import a combined root reducer
import rootReducer from '../reducers/index.js';

import { deckOfCards, freshDeck, shuffle } from '../cards/cards';
import { shuffleDeck } from '../actions/index.js';


// Default state that will be assigned to an app
const defaultState = {

  deck: shuffle(),
  hand: [],
  game: 'ready',
  score: 0

}

const store = createStore(rootReducer, defaultState);

export default store;