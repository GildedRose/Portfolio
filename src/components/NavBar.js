import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';




export const NavigationBar = () => (

        <Navbar expand="lg" sticky="top" variant="dark">
            <Navbar.Brand href="/"><img src={require("../assets/images/AKP.png")} width="35" height="35" alt="Initals AKP" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#about">About</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#portfolio">Portfolio</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#resume">Resume</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="#contact">Contact</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

)