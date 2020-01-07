import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, ROute, Link } from 'react-router-dom';
import Home from './Home.js'
// import { useEffect } from 'react'

import SpellList from './SpellList/SpellList.js'

//http://dnd5eapi.co/api/


function App() {

  return (
    <div className="fullApp">
      
      <nav className='header'>
         <ul>
          <li className="appTitle"><a href="home.asp">DnD-Utils</a></li>
          <li><a href="databases.asp">Databases</a>
            <ul class="dropdown">
              <li><a href="#">Sub-1</a></li>
              <li><a href="#">Sub-2</a></li>
              <li><a href="#">Sub-3</a></li>
            </ul>
          </li>
          <li><a href="tools.asp">Tools</a>
            <ul class="dropdown">
              <li><a href="#">Sub-1</a></li>
              <li><a href="#">Sub-2</a></li>
              <li><a href="#">Sub-3</a></li>
            </ul>
          </li>
          <li><a href="about.asp">About</a></li>
        </ul> 
      </nav> 
      
      <div className='secondHeader'>
        <p>secondHeader</p>
      </div>
      <div className='body'>
        <Home />
        <SpellList />
      </div>
      <div className='footer' />
    </div>
  );
}

export default App;
