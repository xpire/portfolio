import React from 'react';
import logo from './logo.svg';
import './App.css';

import Background from './components/background/Background';
import Hero from './components/hero/Hero';

function App() {
  return (
    <Background>
      <Hero/>
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </Background>
  );
}

export default App;
