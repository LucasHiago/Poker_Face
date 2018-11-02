import React, { Component } from 'react';
import store from '../../store/store';

const cardInfo = {
  display: 'flex',
  flexDirection: 'column'
}

const card = {
  display: 'flex',
  border: '5px solid #6E6E6E',
  borderRadius: '5px',
  margin: '15px',
  width: '200px'
}

class Card extends Component {

  render() {

    const index = this.props.index;

    return (
      <div className="card" style={card} >
        <div style={cardInfo}>
          <h1>{this.props.card.rank}</h1>
          <h1>{this.props.card.suit}</h1>
        </div>
        <form>
          <input type="checkbox" onClick={() => this.props.changeCard(index)} />CHANGE
        </form>
        <div style={cardInfo}>
          <h1>{this.props.card.suit}</h1>
          <h1>{this.props.card.rank}</h1>
        </div>
      </div>
    )
  }
}

export default Card;