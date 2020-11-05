const data = [
    {id: 1, title: 'Royal Flush', image: '/royal_flush.png', content: 'The best hand possible, a royal flush consists of A, K, Q, J and 10, all of the same suit.'},
    {id: 2, title: 'Straight Flush', image: '/straight_flush.png', content: 'Very rare, a straight flush consists of any straight that is all the same suit.'},
    {id: 3, title: 'Four Of A Kind', image: '/four_of_a_kind.png', content: 'Four of a kind, or "quads", consists of four cards of equal value along with another card known as a side card.'},
    {id: 4, title: 'Full House', image: '/full_house.png', content: 'A full house consists of three cards of one value and two cards of another.'},
    {id: 5, title: 'Flush', image: '/flush.png', content: 'A flush is a hand which has all cards of the same suit.'},
    {id: 6, title: 'Straight', image: '/straight.png', content: 'A straight has 5 cards of consecutive value that are not all the same suit.'},
    {id: 7, title: 'Three Of A Kind', image: '/three_of_a_kind.png', content: 'Also known as "trips", three of a kind is 3 cards of the same value and 2 side cards of different values.'},
    {id: 8, title: 'Two Pair', image: '/two_pair.png', content: 'Two pair consists of two cards of equal value, another two cards of equal value, and one extra card.'},
    {id: 9, title: 'Pair', image: '/pair.png', content: 'One pair consists of two cards of the same value, and three extra cards.'},
    {id: 10, title: 'High Card', image: '/high_card.png', content: 'Five cards that do not interact with each other to make any of the other hands, in this case the highest card is counted.'}
  ];

  const list = () => {
    return [...data]
  }; 
  
  const find = (id) => {
    const post = data.find(post => post.id === +id);
    return {...post}
  };
  
module.exports = { list: list, find: find };