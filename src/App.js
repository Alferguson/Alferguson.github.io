import React, { Component } from 'react';
import ColorBar from './components/ColorBar';
import Header from "./components/Header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ColorBar />
      </div>
    );
  }
}

export default App;