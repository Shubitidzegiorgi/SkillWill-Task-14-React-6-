import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { facts } from './Fact'; 

const About = () => {
  const [factId, setFactId] = useState('');
  const [foundFact, setFoundFact] = useState(null);

  const handleSearch = () => {
    const fact = facts.find(fact => fact.id === factId.toString());
    setFoundFact(fact);
  };

  return (
    <div>
      <h1>About Guts</h1>
      <h2>Enter Number Between 1 and 20 And Get Random Fact About Guts</h2>
      <input
        type="text"
        value={factId}
        onChange={e => setFactId(e.target.value)}
        placeholder="Enter Number"
      />
      <button onClick={handleSearch}>Search</button>
      {foundFact ? (
        <div>
          <h2>Random Fact: </h2>
          <p>{foundFact.text}</p>
        </div>
      ) : (
        <p>Fact not found</p>
      )}
      <Link to="/">Home</Link>
    </div>
  );
};

export default About;