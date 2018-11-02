import { combineReducers } from 'redux';

import game from './game';
import deck from './deck';
import hand from './hand';
import score from './score';

// Create a combined root reducer

const rootReducer = combineReducers({deck, hand, game, score});

export default rootReducer;