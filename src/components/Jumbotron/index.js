import React from 'react';
import './style.css';

const Jumbotron = () => {
  return (
    <nav className='jumbotron jumbotron-fluid'>
      <div className='container'>
        <h1 className='display-4'>Clicky Memory Game - Stranger Things Edition</h1>
        <p className='lead'>Start clicking images to earn points! The game ends if you click the same image more than once.</p>
      </div>
    </nav>
  );
}

export default Jumbotron;
