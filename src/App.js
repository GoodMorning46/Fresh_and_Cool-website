import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/faq";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/FAQ" exact component={FAQ} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
