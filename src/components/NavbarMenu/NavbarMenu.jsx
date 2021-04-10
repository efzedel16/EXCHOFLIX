import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';
import './NavbarMenu.css'

const NavbarMenu = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <box-icon name='movie-play'></box-icon>
                <Navbar.Brand href="#home" className="mx-3">Exchoflix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavDropdown title="Movies" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Now Playing</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Upcoming</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Top Rated</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="TV Shows" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Airing Today</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">On TV</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Top Rated</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    </Form>
                    <Nav>
                        <Nav.Link href="#signin">Sign In</Nav.Link>
                        <Nav.Link href="#signup">Sign Up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarMenu;