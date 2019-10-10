import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import DeckList from "./components/DeckList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <DeckList />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
