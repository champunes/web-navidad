import React from "react";
import "./App.css";
import { Copyright, Navbar } from "./components";
import { Date, Header, Gifts } from "./container";

function App() {
  return (
    <div className="App">
      <div className="color-change-2x">
        <Navbar />
        <Header />
      </div>
      <Date />
      <Gifts />
      <Copyright />
    </div>
  );
}

export default App;
