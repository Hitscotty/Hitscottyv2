import React, {Component} from 'react'
import './App.css'
import Home from './pages/Home/Home.js'
import {config} from './config.js'

class App extends Component {
  render() {
    return (<Home settings={config}/>);
  }
}

export default App;
