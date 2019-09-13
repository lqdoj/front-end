import React from 'react';
import PATH from '../../Routes/Path';
import { Navbar as NavBar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';

const displaySections = (sections) =>
{
    return sections.map((section,idx)=>
        {
            return (
                <Nav.Link key={idx} href={PATH[section]} >
                    {section}
                </Nav.Link>
            )
        })
}

const Navbar = (props) =>{
    console.log(props.listOfSections);
    return (
        <NavBar bg="info" expand="lg">
            <NavBar.Brand href="/">
                { 'LQDOJ' }
            </NavBar.Brand>
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {displaySections(props.listOfSections)}
                </Nav>
            </NavBar.Collapse>
        </NavBar>
    );
};

export default Navbar;