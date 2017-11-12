import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={ 
    message: null
  }

  componentDidMount() {
    window.fetch('/test.json').then(x => x.json()).then(x => {
      this.setState({message: x.hello});
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to a beauitful, more new UI</h2>
        </div>
        <p className="App-intro">
          To, edit <code>src/App.js</code> and save to reload.
        </p>

        <h3>{this.state.message}</h3>
      </div>
    );
  }
}

export default App;
