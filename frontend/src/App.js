import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Stage1 from './components/Stages/Stage1';
import Stage2 from './components/Stages/Stage2';

class App extends Component {

  state = {
    stage: 1
  }

  render() {
    return (
      <div className="App">
        <Navbar />

        <div className="stage-container">
          <Stage1 />
          <Stage2 />
        </div>

      </div>
    );
  }
}

export default App;
