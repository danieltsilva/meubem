import React from 'react';
import Header from './Header';
import Statement from './Statement';
import Alternatives from './Alternatives';

class App extends React.Component {
 render() {
    return (
      <div className="ui container">
        <Header />
        <Statement />
        <Alternatives />
      </div>
    );
  }
}

export default App;