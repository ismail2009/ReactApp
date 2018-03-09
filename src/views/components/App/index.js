import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import configureStore from '../../../configure-store';
import PageNotFound from '../PageNotFound';
import Home from '../Home';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/" component={PageNotFound} />
      </Switch>
    </Router>
  </Provider>
);

export default App;
