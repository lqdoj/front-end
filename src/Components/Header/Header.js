import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import PATH from '../../Path';
import logo from '../../assets/Logotruonglqd.jpg';
import Navbar from '../Navbar/Navbar';

const toLogin = (
    <div className="header-component_login-bar">
        <Link to={PATH.LOGIN}>
            Login
        </Link>
        <Link to={PATH.SIGNUP}>
            Register
        </Link>
    </div>
);

const loggedIn = (
    <div className="header-component_login-bar">
        <Link to={PATH.LOGIN}>
            Log Out
        </Link>
        
    </div>
);


const Header = (props) =>{
    let ifLogged=false;
    return (
        <div id="Header">
            {(ifLogged===false)?toLogin:loggedIn}
            <div className="logo-div">
                <a href="/">
                    <img src={logo} className="top-logo" alt="le quy don logo"/>
                </a>
            </div>
            <Navbar listOfSections={props.listOfSections}/>
        </div>
    )
}
export default Header;