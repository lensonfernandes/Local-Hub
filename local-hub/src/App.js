

import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <>
    {/* <div className="app">Hello World!</div> */}
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
