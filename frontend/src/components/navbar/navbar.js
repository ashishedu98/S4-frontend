import React from 'react'
import {Navbar,Nav,NavDropdown} from'react-bootstrap'
import {Link} from 'react-router-dom'

const NavigationBar =()=>{
    return(
        <div>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Security Surveillence</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><Link to="/home">Home </Link></Nav.Link>
                <Nav.Link href="#home">Recognition</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Records</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
        )
}
export default NavigationBar