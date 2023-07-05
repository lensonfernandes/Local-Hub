import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";

function App() {
  return (
    <>
      {/* <div className="app">Hello World!</div> */}
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Header />
                <Login />
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
