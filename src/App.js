import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';

// Components
import GameBoard from './components/GameBoard/GameBoard';
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">React Mastermind</header>
        <GameBoard/>
        <ColorPicker/>
        <GameTimer/>
        <NewGameButton/>
        <footer className="component">Footer</footer>
      </div>
    );
  }
}

export default App;
