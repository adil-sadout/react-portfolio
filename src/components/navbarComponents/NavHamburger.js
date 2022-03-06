
import { Navbar, Container, Offcanvas, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom"

export default function NavHamburger() {
  return (
    
    <div className='d-md-none d-flex'>
        <Navbar expand={false}  className='text-light '>
        <Container  fluid >
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
            className="text-light"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            >
            <Offcanvas.Header className=' text-center  bg-dark ' closeButton>
                <Offcanvas.Title className='display-1 text-center' id="offcanvasNavbarLabel"></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className='bg-dark'>
                <Nav className="justify-content-end flex-grow-1 pe-3 text-center display-1">
                    <Link className=' text-light text-decoration-none mb-4' to="/">
                        Home
                    </Link>
                    <Link className=' text-light text-decoration-none mb-4'  to="/Projects">
                        Projects
                    </Link>
                    <a className=' text-light text-decoration-none mb-4' rel="noreferrer" target="_blank" href="https://github.com/adil-sadout">
                        Github
                    </a>
                    <Link className=' text-light text-decoration-none mb-4'  to="/Contact">
                    Contact
                    </Link>
                    
                </Nav>
            </Offcanvas.Body>
            </Navbar.Offcanvas>
        </Container>
        </Navbar> 
    </div>
    
  )
}