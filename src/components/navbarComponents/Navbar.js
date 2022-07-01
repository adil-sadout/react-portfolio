import NavMenu from "./NavMenu.js";
import NavHamburger from "./NavHamburger.js"
import { NavLink } from "react-router-dom";

export default function Navbar(){

    return(
        <div className="d-flex  p-2">
            <div className="container d-flex justify-content-between align-items-center ">
                <NavLink  className="link-light navbar-header h1 mr-3 mb-0  nav-link" to="/" >Adil S.</NavLink>
                
                <NavMenu/>
                <NavHamburger/>
                
            </div>
            
        </div>
    )
}