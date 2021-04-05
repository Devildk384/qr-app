import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./components/Side/Sidebar";
import Header from "./components/Header/Header";
import AdminType from "./components/AdminType/AdminType";
import "./App.scss";
import Language from "./components/Language/Language";
import Countries from "./components/Countries/Countries";


function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__left">
          <Sidebar />
        </div>
        <div className="app__right">
          <div className="app__right-top">
            <Header />
          </div>
          <div className="app__right-middle">
            <Switch>
              <Route path="/admintype">
                <AdminType />
              </Route>
              <Route path="/language">
                <Language />
              </Route>
              <Route path="/countries">
                <Countries />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
