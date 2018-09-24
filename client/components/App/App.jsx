import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index.js';

import Hand from '../Hand/Hand.jsx';
import Button from '../Button/Button.jsx';

// Assigns state values to a component

const mapStateToProps = (state) => {
  return {
    deck: state.deck,
    hand: state.hand,
    game: state.game,
    score: state.score
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

let gameModes = ['straight', 'pair', 'not a winner', 'ready'];

class Main extends Component {

  render() {
    let props = this.props.game
    return (
      <div className="App">
        <Hand {...this.props} />
        <Button />
        <div>
        {gameModes.includes(this.props.game) && this.props.game}!
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);