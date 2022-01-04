//[8 kyu] Define a card suit
const suits = {
    '♣': 'clubs',
    '♦': 'diamonds',
    '♥': 'hearts',
    '♠': 'spades'
  }
  const defineSuit = card => suits[card.substr(-1)]