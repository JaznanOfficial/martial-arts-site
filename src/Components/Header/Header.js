import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css';
import './martial-arts-logo.png'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='p-0 nav-bar'>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="./martial-arts-logo.png"
                            width="100"
                            height="75"
                            className="d-inline-block align-center"
                        />{" "}
                        
                    </Navbar.Brand>
                    <h3 className='d-inline-block align-center mt-2 text-light'>Martial Arts Academy</h3>
                    <Nav className="mx-auto custom-nav">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
