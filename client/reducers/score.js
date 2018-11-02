
const score = (state = [], action) => {

  switch(action.type) {
    case 'UPDATE_SCORE': 
      return state + action.score

    default: 
      return state;
  }

};

export default score;