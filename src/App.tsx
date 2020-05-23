import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Background from "./components/background/Background";
import Hero from "./components/hero/Hero";
import Theme from "./theme/Theme";

function App() {
  return (
    <Theme>
      <Background>
        <Hero />
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
    </Theme>
  );
}

export default App;
