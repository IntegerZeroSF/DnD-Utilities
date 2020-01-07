import React from "react";
import { useEffect } from "react";
import "./SpellList.css";

import SingleSpell from "./SingleSpell/SingleSpell.js";

function SpellList() {

   let spellDataF = [];

   useEffect(() => {
    fetch("http://www.dnd5eapi.co/api/spells")
      .then(res => res.json())
      .then(spellData => {
        spellDataF = spellData.results.map((spells, index) => {
          console.log(spellDataF)
          return <div>{spells.name}</div>;
        });
      });
  });
//   console.log(spellDataF)
  return (
    <>

    </>
  );
}

export default SpellList;
