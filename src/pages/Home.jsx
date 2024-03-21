import React from 'react';
import { Link } from 'react-router-dom';
import GutsImage from '../images/guts.jpg';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Guts' Page</h1>
      <img src={GutsImage} alt="Guts" width="200" />
      <p>Name: Guts</p>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Home;
