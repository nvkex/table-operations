import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Stage1 from './components/Stage1';

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
        </div>

      </div>
    );
  }
}

export default App;
