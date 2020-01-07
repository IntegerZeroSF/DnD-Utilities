import React from 'react';
import './App.css'
// import { useEffect } from 'react'

import SpellList from './SpellList/SpellList.js'

//http://dnd5eapi.co/api/


function App() {

  return (
    <div className="fullApp">
      <header className='header'>
         <ul>
          <li className="appTitle"><a href="home.asp">DnD-Utils</a></li>
          <li><a href="databases.asp">Databases</a></li>
          <li><a href="tools.asp">Tools</a></li>
          <li><a href="about.asp">About</a></li>
        </ul> 
      </header>
      <div className='secondHeader'>
        <p>secondHeader</p>
      </div>
      <div className='body'>
        <SpellList />
      </div>
    </div>
  );
}

export default App;
