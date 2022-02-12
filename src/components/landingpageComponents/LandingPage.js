import {NavLink} from "react-router-dom"

export default function LandingPage(){
    return(
        <div className="landingPage">
            <div className="landingPage-content">
                <h1>Hello, I'm Adil, Front End Engineer, And Your Next Website Creator :)</h1>
                <p >You will find all you need to know about my previous experiences, projects, and contact information</p>
            </div>
            <div className="landingPage-buttons">
                <NavLink to="/projects" >Projects</NavLink>
                <a href="https://github.com/adil-sadout" rel="noreferrer" target="_blank">Github</a>
                <NavLink to="/contact" >Contact</NavLink>
            </div>
            
        </div>
    )
}