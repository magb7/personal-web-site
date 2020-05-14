import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

// Components
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      {/* <Switch>
        <Route exact path="/" />
      </Switch> */}
      {/* <p>Hello world !</p> */}
      <Footer />
    </div>
  );
}

export default App;
