import React from 'react'
import {Navbar,Nav,NavDropdown,Form,Button,FormControl} from'react-bootstrap'
import {Link} from 'react-router-dom'

const NavigationBar =()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">Security Surveillence</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link><Link to="/home">Home </Link></Nav.Link>
                <Nav.Link><Link to="/Recognition">Recognition</Link></Nav.Link>
                <Nav.Link><Link to="/Records">Records</Link></Nav.Link>
                <Nav.Link><Link to="/Profile">Profile</Link></Nav.Link>
                <Nav.Link><Link to="/Capture">Capture</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form inline>
            <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
            <Button type="submit" variant="info">Submit</Button>
            </Form>
            </Navbar>
           
        </div>
        )
}
export default NavigationBar