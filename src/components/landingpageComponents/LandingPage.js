import {NavLink} from "react-router-dom"

export default function LandingPage(){
    return(
        <>
        
        <div className="container d-flex h-75 align-items-center justify-content-center w-75 text-center flex-column">
            
            
            <div className="landingPage-content">
                <p className="display-5">Hello, I'm Adil, Front End Engineer, And Your Next Website Creator :)</p>
                <p className="lead">You will find all you need to know about my previous experiences, projects, and contact information by checking the links below</p>
            </div>
            <div className="landingPage-buttons">
                <NavLink className="btn btn-warning m-1  btn-lg" to="/projects" >Projects</NavLink>
                <a  className="btn btn-warning m-1  btn-lg" href="https://github.com/adil-sadout" rel="noreferrer" target="_blank">Github</a>
                <NavLink className="btn btn-warning m-1  btn-lg" to="/contact" >Contact</NavLink>
            </div>
            
            
            
        </div>
        </>
        
    )
}