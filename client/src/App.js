import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppRoutes from "./AppRoutes";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  content: {
    position: "relative",
    top: "70px",
  },
});

function App() {
  const classes = useStyles();

  return (
    <Provider store={store}>
      {/* Redux Provider */}
      <Router>
        <div className="App">
          <NavBar />
          <div className={classes.content}>
            <AppRoutes />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
