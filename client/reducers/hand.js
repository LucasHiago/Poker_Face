import { drawFiveCards } from '../cards/logic';

const hand = (state = [], action) => {

  let updatedState = [...state];
  const i = action.index;

  switch(action.type) {

    case 'DRAW_CARD':

      return [
        ...state, {...action.card, keep: true}
      ]

    case 'TOGGLE_CARD':

      return [
        ...state.slice(0,i),
        {...state[i], keep: !state[i].keep},
        ...state.slice(i + 1)
      ]

    case 'CHANGE_HAND':
      
      let keptPile = updatedState.filter((card) => (card.keep === true));
      let moreCards = action.moreCards.map((card) => { return {...card, keep: true}});

      return [
        ...keptPile,
        ...moreCards
      ]
    
    case 'CLEAR_HAND':

      return [];


    default:
      return state;
  }
};

export default hand;