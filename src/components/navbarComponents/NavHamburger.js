import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown } from 'react-bootstrap';
import {NavLink} from "react-router-dom";

export default function NavHamburger() {
  return (
    
    <div className='d-md-none d-flex'>
        
        <NavDropdown  id='navbarHamburger'
        title={<FontAwesomeIcon className='text-white display-6'  icon={faBars}/>}
        >
            <NavDropdown.Item href="/">
                <a>Home</a>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="projects">
                <a>Projects</a>
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item href="https://github.com/adil-sadout" target="_blank">
                Github
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item href="/contact">
                <a>Contact</a>
            </NavDropdown.Item>

        </NavDropdown>
        
    </div>
    
  )
}