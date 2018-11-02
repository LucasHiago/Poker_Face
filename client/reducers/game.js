
const game = (state = [], action) => {
  
  switch(action.type) {

    case 'START_GAME':
      return 'in progress';

    case 'PLAY_GAME':
      return 'game over';

    case 'CALCULATE_OUTCOME':
      return action.outcome;

    case 'RESET_GAME':

      return 'ready';

    default: 
      return state;
  }
};

export default game;