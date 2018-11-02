import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { judge } from './../../cards/logic';

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

const playModes = ['ready', 'straight', 'pair', 'not a winner'];

class Button extends Component {

  
  render() {
    return (
      <div className="App">
        <button onClick={() => {
          // Access the deck & hand
          let currentHand = [...this.props.hand];
          let currentDeck = [...this.props.deck];
          
          // If ready, start a game
          if(playModes.includes(this.props.game)) {
            this.props.start();
            this.props.shuffleDeck();
            // give 5 cards
            for (let i = 0; i < 5; i++) {
              currentHand.push({...currentDeck.pop(), keep: true});
            }
            // update hand
            this.props.changeHand(currentHand);
            // update deck
            this.props.dispatchCard(5);
          }
          
          // If playing, change cards and play
          if(this.props.game === 'in progress') {
            // discard cards player wants to change
            currentHand = [...currentHand.filter((card) => (card.keep === true))];

            // draw new cards from the deck
            let drawCount = 5 - currentHand.length;
            let newCards = [];
            for (let i = drawCount; i > 0 ; i--) {
              newCards.push({...currentDeck.pop(), keep: true});
            }
            this.props.changeHand(newCards);
            // update deck
            this.props.dispatchCard(drawCount);

            this.props.playGame();
            
          }
          if (this.props.game === 'game over') {
            // calculate game
            let outcome = judge(currentHand);
            this.props.calculateGame(outcome);

            // reset the game
            this.props.clearHand();
            this.props.shuffleDeck();
            // update score
          }
        }}>
        { playModes.includes(this.props.game) ? 'PLAY' : 'GO'}
        </button>
      </div>
    )
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);