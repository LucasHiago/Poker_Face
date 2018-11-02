import React, { Component } from 'react';
import Card from '../Card/Card.jsx';

const handStyles = {
  display: 'flex',
  flexDirection: 'row'
}


class Hand extends Component {

  

  render() {

    return (
    <div className="hand" style={handStyles} >
    {this.props.hand.map((card, index) => <Card {...this.props} key={card.uniqueId} index={index} card={card} status="keep" />)}
    </div>
    )
  }
}

export default Hand;