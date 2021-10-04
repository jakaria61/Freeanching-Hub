import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../image/logo.png'
const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand ><img src={logo} alt="" className="nav-img img-fluid" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Link className='nav-style' to='/home'>Home</Link>
                        <Link className='nav-style' to='/services'>services</Link>
                        <Link className='nav-style' to='/success'>Success</Link>
                        <Link className='nav-style' to='/about'>About Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;