import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './pages/Home.js'
import {config} from './config.js'

class App extends Component {
  render() {
    return (<Home settings={config}/>);
  }
}

export default App;
