import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  return (
    <Provider store={store}>
      {/* Redux Provider */}
      <Router>
        <div className="App">
          <NavBar />
          <AppRoutes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
