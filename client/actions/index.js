import * as types from './actionTypes';


// start a game

export const start = () => {
  return {
    type: types.START_GAME
  }
};

// change a card

export const changeCard = (index) => {
  return {
    type: types.TOGGLE_CARD,
    index
  }
};

// play a game

export const playGame = () => {
  return {
    type: types.PLAY_GAME
  }
};

export const updateScore = (score) => {
  return {
    type: types.UPDATE_SCORE,
    score
  }
};

export const shuffleDeck = () => {
  return {
    type: types.SHUFFLE_DECK
  }
};


export const dispatchCard = (times) => {
  return {
    type: types.DISPATCH_CARD,
    times
  }
};

export const drawCard = (card) => {
  return {
    type: types.DRAW_CARD,
    card
  }
};

export const changeHand = (moreCards) => {
  return {
    type: types.CHANGE_HAND,
    moreCards
  }
};

export const clearHand = () => {
  return {
    type: types.CLEAR_HAND
  }
};

export const resetGame = () => {
  return {
    type: types.RESET_GAME
  }
};

export const calculateGame = (outcome) => {
  return {
    type: types.CALCULATE_OUTCOME,
    outcome
  }
};