import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './OtherPages/Home/Home.js'
import About from  './OtherPages/About/About.js'

import SpellList from './Databases/SpellList/SpellList.js'
import TraitsList from './Databases/TraitsList/TraitsList.js'
import DiceRoller from './Tools/DiceRoller/DiceRoller.js'
import HealthCounter from './Tools/HealthCounter/HealthCounter.js'


import SingleSpell from './Databases/SpellList/SingleSpell/SingleSpell.js'
import SingleTrait from './Databases/TraitsList/SingleTrait/SingleTrait.js'

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
            </div>
          </li>
          <li className="dropdown">
            <a className="dropbtn">Tools</a>
            <div className="dropdown-content">
              <Link to='/diceroller'>Dice Roller</Link>
              <Link to='/healthcounter'>Health Counter</Link>
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
          <Route path='/home'exact = {true} component={Home} />
          __________________
          <Route path='/spelllist' exact = {true} component={SpellList} /> 
          <Route path='/traitslist' exact = {true} component={TraitsList} />
          __________________
          <Route path='/diceroller' exact = {true} component={DiceRoller} />
          <Route path='/healthcounter' exact = {true} component={HealthCounter} />
          __________________
          <Route path='/about' exact = {true} component={About} />
          __________________
          <Route path='/spelllist/spell/:spellName/' 
                 component={SingleSpell}
          />
          <Route path='/traitslist/trait/:traitName/'
                 component={SingleTrait}
          />       
          __________________
          <Home />
        </Switch>
      </div>
      <div className='footer' />

    </div>
    </Router>
  );
}

export default App;
