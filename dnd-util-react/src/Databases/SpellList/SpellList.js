import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./SpellList.css";

// import SingleSpell from "./SingleSpell/SingleSpell.js";

function SpellList() {

  const [spells, setSpells] = useState([]);


  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/spells")
      .then(res => res.json())
      .then(spellData => setSpells(spellData.results))
  }, []);

 const loadSingle = () => {
   console.log(spells.index)
 }

  const renderSpells = spells.map( (spell, index) => 
    <Link to={spell.index}  
          className='singleSpell' 
          key={spell.index}
          onClick={loadSingle}>{spell.name}</Link> ) 


  // console.log(spells)
  return (
    <div className='mainDisplay'>
      {renderSpells}
    </div>
  );
}

export default SpellList;
