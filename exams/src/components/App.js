import React from 'react';
import Header from './Header';

class App extends React.Component {
 render() {
    return (
      <div className="ui container">
        <Header />
        <div className="ui content">Statement</div>
        <div>Alternatives</div>
      </div>
    );
  }
}

export default App;