import React from 'react'
/* import { useEffect } from 'react' */
import './SingleSpell.css'

function SingleSpell() {

    return (
        <>
            <div className='card'>
                <h1 className='cardTitle'>Testing SingleSpell</h1>
                <p className='cardDescrip'>Description</p>
                <p className='higherLvl'>higherLvl</p>
                    <div className='variTools'>
                            <h5 className='spellLvl'>spellLvl</h5>
                            <h5 className='range'>range</h5>
                            <h5 className='ritual'>ritual</h5>
                            <h5 className='duration'>duration</h5>
                            <h5 className='conc'>concentration</h5>
                            <h5 className='castingTime'>castingTime</h5>
                    </div>
                <div className='cardFooter'></div>
            </div>
        </>
    )
}

export default SingleSpell;