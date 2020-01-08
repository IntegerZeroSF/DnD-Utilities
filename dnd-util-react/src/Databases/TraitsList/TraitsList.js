import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./TraitsList.css";

// import SingleSpell from "./SingleSpell/SingleSpell.js";
// Traits

function TraitsList() {

  const [traits, setTraits] = useState([]);


  useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/traits")
      .then(res => res.json())
      .then(traitsData => setTraits(traitsData.results))
  }, []);

  const renderTraits = traits.map( (trait, index) => <Link to={trait.index}  className='singleFeature' key={trait.index}>{trait.name}</Link> ) 


  // console.log(spells)
  return (
    <div className='mainDisplay'>
      {renderTraits}
    </div>
  );
}

export default TraitsList;
