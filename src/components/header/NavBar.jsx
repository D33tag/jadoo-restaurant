import React from 'react';
import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import Logo from '../../assets/images/logo.png';
import '../../App.css'; // Import your CSS file for custom styles

const NavBar = () => {
    return (
        <Navbar expand="lg" className="navbar-custom py-3">
            <Container className="d-flex justify-content-between align-items-center gap-5 mx-5">
                {/* Logo */}
                <div className='Jado'>
                    <Navbar.Brand href="#" className="d-flex align-items-center">
                        <img src={Logo} alt="Logo" className="navbar-logo" /></Navbar.Brand>
                </div>

                {/* Links */}
                <Nav className="me-auto ms-5 gap-5 fw-medium ">
                    <Nav.Link href="#">Destinations</Nav.Link>
                    <Nav.Link href="#">Hotels</Nav.Link>
                    <Nav.Link href="#">Flights</Nav.Link>
                    <Nav.Link href="#">Bookings</Nav.Link>
                    {/* Right Side */}
                    <div className="d-flex align-items-center gap-3">
                        <Nav.Link href="#">Login</Nav.Link>
                        <Button variant="outline-dark" className="rounded-2 px-4">Sign up</Button>
                        <NavDropdown title="EN" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">FR</NavDropdown.Item>
                            <NavDropdown.Item href="#">DE</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default NavBar;
