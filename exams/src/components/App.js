import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Statement from './Statement';
import Alternatives from './Alternatives';
import Menu from './Menu';
import history from '../history';

class App extends React.Component {
 render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Menu />
            <Header />
            <Statement />
            <Alternatives />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;