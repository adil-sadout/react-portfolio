import NavMenu from "./NavMenu.js";
import NavHamburger from "./NavHamburger.js"


export default function Navbar(){

    return(
        <div className="d-flex bg-dark bg-opacity-75 p-2">
            <div className="container d-flex justify-content-between align-items-center ">
                <a href="/" className="link-light navbar-header h1 mr-3 mb-0  nav-link">
                    Adil Sadout
                </a>
                <NavMenu/>
                <NavHamburger/>
                
            </div>
            
        </div>
    )
}