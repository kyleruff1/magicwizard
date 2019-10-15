import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import NoMatch from "./pages/NoMatch";
// import Carousel from "./components/Carousel";
// import Navbar from "./components/Navbar";
// import DeckList from "./components/DeckList";

function App() {
  return (
    <Router>
      {/* <Navbar />
      <Carousel />
      <DeckList /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/browse" component={Browse} />
        <Route component={NoMatch} />
      </Switch>
      //
    </Router>
  );
}

export default App;
