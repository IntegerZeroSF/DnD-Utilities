import React from "react";
import { useState, useEffect } from "react";
import "./SpellList.css";

// import SingleSpell from "./SingleSpell/SingleSpell.js";

function SpellList() {

  const [spells, setSpells] = useState([]);


  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/spells")
      .then(res => res.json())
      .then(spellData => setSpells(spellData.results))
  }, []);

  const renderSpells = spells.map( (spell, index) => <button className='singleSpell' key={spell.index}>{spell.name}</button> ) 


  // console.log(spells)
  return (
    <div className='mainDisplay'>
      {renderSpells}
    </div>
  );
}

export default SpellList;
