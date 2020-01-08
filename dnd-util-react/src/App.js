import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home.js'
import About from  './About.js'

import SpellList from './Databases/SpellList/SpellList.js'
import TraitsList from './Databases/TraitsList/TraitsList.js'

//http://dnd5eapi.co/api/
//change features into traits


function App() {

  return (
    <Router>
    <div className="fullApp">
 
      <nav className='header'>
        <ul>
          <li><Link to='/home' className='appTitle'>DnD Utils</Link></li>
          <li className="dropdown">
            <a className="dropbtn">Databases</a>
            <div className="dropdown-content">
              <Link to='/spelllist'>Spells</Link>
              <Link to='/traitslist'>Traits</Link>
              <a href="*">Example 3</a>
            </div>
          </li>
          <li className="dropdown">
            <a className="dropbtn">Tools</a>
            <div className="dropdown-content">
              <a href="*">Dice Roller</a>
              <a href="*">Health Counter</a>
              <a href="*">Example 3</a>
            </div>
          </li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      
      
      <div className='secondHeader'>
      </div>
      <div className='body'>
        <Switch>
          __________________        
          <Route path='/home'>
            <Home />
          </Route>
          __________________
          <Route path='/spelllist'>
            <SpellList />
          </Route>
          <Route path='/traitslist'>
            <TraitsList />
          </Route>
          __________________
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </div>
      <div className='footer' />

    </div>
    </Router>
  );
}

export default App;
