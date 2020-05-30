import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Background from "./components/background/Background";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Title from "./components/title/Title";
import Header from "./components/header/Header";
import Theme from "./theme/Theme";

function App() {
  return (
    <Theme>
      <Background>
        <Header />
        <Title />
        <About />
        <Projects />
        <Contact />
      </Background>
    </Theme>
  );
}

export default App;
