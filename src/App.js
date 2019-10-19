import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import scripts from "./components/script";
import Login from "./pages/Login";
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
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/searchtest" component={scripts} />
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
      //
    </Router>
  );
}

export default App;
