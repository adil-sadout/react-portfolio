import {NavLink} from "react-router-dom"

export default function NavMenu(){
    return(
        <div className="navbarMenu">
            <NavLink to="/">
                Home
            </NavLink>
            <NavLink to="/projects">
                Projects
            </NavLink>
            <NavLink to="/contact">
                Contact
            </NavLink>
        </div>
    )
}