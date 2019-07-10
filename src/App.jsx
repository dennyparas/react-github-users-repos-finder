import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Pages Components
import Home from './pages/Home';

// Layout Components
import Navbar from './layout/Navbar';

// Redux Store
import { Provider } from 'react-redux';
import store from './store';

// Material UI
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
