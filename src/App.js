import React, { Component } from 'react';
import News from './News';
import Navbar from './Navbar';
class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={20}/>
      </div>
     
    );
  }
}

export default App;
