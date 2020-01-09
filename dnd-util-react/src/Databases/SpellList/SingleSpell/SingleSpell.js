import React from 'react'
import { useEffect, useState } from 'react'
import './SingleSpell.css'

function SingleSpell(props) {

    const [spell, setSpell] = useState([]);
    var inputFetch = props.match.params.spellName
    var ouputFetch = inputFetch.toLowerCase().replace(' ' , '-' )

    useEffect(() => {
        fetch(`http://www.dnd5eapi.co/api/spells/${ouputFetch}`)
        .then(res => res.json())
        .then(spellData => {
            // console.log(spellData)
            setSpell(spellData)
        })
    }, );

    return (
        <div className='body'>
            {spell ?
                <div className='card'>
                    <h1 className='cardTitle'>{spell.name}</h1>

                    <p className='cardDescrip'>{spell.desc}</p>
                        <div className='variTools'>
                                <span className='spellLvl'>Level: {spell.level}</span>
                                <span className='range'>Range: {spell.range}</span>
                                <span className='components'>Components :{spell.components}</span>
                                {/* <span className='ritual'>A Ritual: {spell.ritual}</span> */}
                                <span className='duration'>Duration: {spell.duration}</span>
                                {/* <h5 className='conc'>Concentration: {spell.concentration}</h5> */}
                                <span className='castingTime'>Casting Time: {spell.casting_time}</span>
                        </div>
                    <div className='cardFooter'></div>
                </div>
            : <div>Now Loading</div> }
        </div>
    )
}

export default SingleSpell;