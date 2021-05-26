import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import ContextWrapper from "./context/contextProvider";
import "./index.css";
import HomePage from "./pages/home";
import ImagePage from "./pages/image";
import UserPage from "./pages/user";

function App() {
  return (
    <ContextWrapper>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={HomePage} exact />
          {/* <Route path="/">
          <HomePage />
        </Route> */}
          <Route path="/users" component={UserPage} exact />
          <Route path="/image" component={ImagePage} exact />
        </Switch>
      </Router>
    </ContextWrapper>
  );
}

export default App;
