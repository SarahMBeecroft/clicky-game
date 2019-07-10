import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Cards from './components/Cards';
import Friends from "./ImageData.json";
import "./App.css";

// Game functionality
class App extends React.Component {
  state = {Friends,
  score: 0,
  highScore: 0,
  ids: []}

  showFriends = () => {
    this.setState({Friends});
  };

  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 });
    console.log(this.state.score);
  };
  
  highScoreUpdate = () => {
    if(this.state.score >= this.state.highScore) {
      this.setState({highScore: this.state.score});
    } else {
      this.setState({score: 0});
    }
  };
  
  resetGame =  () => {
    this.setState({ score: 0});
    this.setState({ ids: [] });
  }
  
  handleImageClick = (id) => {
  this.setState({friends: this.shuffleFriends(Friends) })
  console.log(id);

  if(!this.state.ids.includes(id)) {
   this.state.ids.push(id);
    this.handleIncrement();
  } else{
    this.resetGame();
    this.highScoreUpdate();
  }
  }

  shuffleFriends = Friends => {
    let i = Friends.length -1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const tempValue = Friends[i];
      Friends[i] = Friends[j];
      Friends[j] = tempValue;
      i--;
    }
    return Friends
  }

render() {
  return (
    <Wrapper>
      <Navbar />
      <Jumbotron />
    <h2>Score: {this.state.score}  | High Score: {this.state.highScore} </h2> 
      <div className= 'grid-container'>
      {this.state.Friends.map(Friend =>(<Cards
        id={Friend.id}
        name={Friend.name}
        image={Friend.image}
        handleImageClick={this.handleImageClick}
      />))}
      </div>
    </Wrapper>
  );
  }}

  
export default App;
