import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rooteReducer from "./modules/index";

import CounterContainer from "./containers/CounterContainer";

const store = createStore(rooteReducer);

export default function Routes() {
  return (
    <Provider store={store}>
      <Router history={createBrowserHistory} base="/">
        <Switch>
          <Route exact path="/" component={CounterContainer} />
          {/* <Route exact path="/" component={}/>
        <Route exact path="/" component={}/> */}
        </Switch>
      </Router>
    </Provider>
  );
}
