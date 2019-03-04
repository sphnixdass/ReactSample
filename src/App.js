import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as tf from '@tensorflow/tfjs';
import Form1 from './DassForm/Form1';
import Person from './DassForm/Person';

class App extends Component {
  render() {
    return (
      <div>
          <Form1/>
          
      </div>
    );
  }
}

export default App;
