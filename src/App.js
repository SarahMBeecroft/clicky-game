import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Images from './components/Images/Image';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    score: 0,
    highScore: 0
  };

  render() {
    return (
      <Wrapper>
        <Navbar 
          score={this.state.score} highScore={this.state.highScore}
        />
        <Jumbotron />
        <div>
        <Images />
        </div>
      </Wrapper>
    );
  }
}


export default App;