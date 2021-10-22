import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import AppRoutes from "./AppRoutes";
import NavBar from "./NavBar";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
