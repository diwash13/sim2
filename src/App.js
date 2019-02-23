import React, { Component } from 'react';
import './App.css';
import router from './router'
import Header from './Components/Header/Header'
import axios from 'axios'
import { HashRouter } from 'react-router-dom'


class App extends Component {
  
   
  render() {
    return (
      <div className="App">
       <HashRouter>
         {
           router
         }
       </HashRouter>
       <Header />
      </div>
    );
  }
}


export default App;
