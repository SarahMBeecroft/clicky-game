import React from 'react';
import './style.css';

const Navbar = props => {
  return (
    <div className='navbar navbar-dark'>
      <a className='navbar-brand' href='/'>Stranger Things Memory Game</a>
      <div className='score'>
        Score: {props.score} High Score: {props.highScore}
      </div>
    </div>
  );
}

export default Navbar;