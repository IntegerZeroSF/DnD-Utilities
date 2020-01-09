import React from "react";
import "./About.css";

function About() {

    return (
        <div className='aboutDiv'>
            <h1>This website was built from the ground up using <a className='aboutLink' href='https://reactjs.org/'>React</a></h1>
            <h1>Data was pulled from <a className='aboutLink' href='https://www.dnd5eapi.co/'>D&D 5e API</a></h1>
            <h1>Built by Raymond Levengood</h1>
            <h1>See my profile on <a className='aboutLink' href='https://www.linkedin.com/in/raymondlevengood'>LinkedIn</a></h1>
        </div>
    )
}

export default About;