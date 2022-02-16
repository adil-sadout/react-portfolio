import {NavLink} from "react-router-dom"

export default function NavMenu(){
    return(
        <div className="d-none d-md-flex navbar navbar-nav d-flex h2 justify-content-between flex-row ">
            <NavLink className=" link-light mx-2 nav-link" to="/">
                Home
            </NavLink>
            <NavLink className=" link-light mx-2 nav-link" to="/projects">
                Projects
            </NavLink>
            <NavLink className=" link-light mx-2 nav-link " to="/contact">
                Contact
            </NavLink>
        </div>
    )
}