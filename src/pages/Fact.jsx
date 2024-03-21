import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const facts = [
    { id: '13', text: 'Guts is the protagonist of the manga series "Berserk".' },
    { id: '4', text: 'He wields a massive sword called the Dragonslayer.' },
    { id: '6', text: 'Guts was formerly a member of the Band of the Hawk.' },
    { id: '9', text: 'He is known for his indomitable will and immense strength.' },
    { id: '20', text: 'Guts has a brand on the back of his neck, marking him for sacrifice.' },
    { id: '17', text: 'He seeks revenge against the God Hand for the Eclipse.' },
    { id: '19', text: 'Guts travels with his companion, Puck, a mischievous elf.' },
    { id: '11', text: 'He is often referred to as the Black Swordsman.' },
    { id: '1', text: 'Guts\' sword, the Dragonslayer, is capable of killing demons.' },
    { id: '14', text: 'Guts has a complex and tragic backstory, including a traumatic childhood.' },
  ];

const Fact = () => {
  let { factId } = useParams();
  const fact = facts.find(fact => fact.id === factId.toString());

  return (
    <div>
      <h1>Fact</h1>
      {fact ? <p>{fact.text}</p> : <p>Fact not found</p>}
      <Link to="/">Home</Link>
    </div>
  );
};

export default Fact;