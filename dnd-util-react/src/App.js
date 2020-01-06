import React from 'react';
import './App.css'
import { useEffect } from 'react'

//http://dnd5eapi.co/api/


function App() {

  // let spellList= 'http://dnd5eapi.co/api/'

  useEffect(() => {
    fetch('http://dnd5eapi.co/api/spells')
      .then(res => res.json())
      .then(spellData => {
        console.log(spellData)
      })
  })

  return (
    <div className="fullApp">
      <header className='header'>
        <p>Up and running</p>
      </header>
      <div className='secondHeader'>
        <p>secondHeader</p>
      </div>
    </div>
  );
}

export default App;
