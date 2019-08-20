import React from 'react';
import {NavLink} from 'react-router-dom';
import PATH from '../../Routes/Path';
import './Navbar.css';

const displaySections = (sections) =>
{
    return sections.map((section,idx)=>
        {
            return (
                <NavLink key={idx} exact to={PATH[section]} activeClassName="active-nav-link"> {section} </NavLink>
            )
        })
}

const Navbar = (props) =>{
    console.log(props.listOfSections);
    return (
        <div id="navbar" className="navbar-component">
            {displaySections(props.listOfSections)}
        </div>
    );
};

export default Navbar;