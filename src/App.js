// @flow

import React, { Component } from 'react';
import { render } from 'react-dom';
import './App.css';

type Props = {}

class App extends Component<Props> {
  render() {
    return (
      <div className="app">
        <p>Hello world!</p>
      </div>
    );
  }
}

export default App;
