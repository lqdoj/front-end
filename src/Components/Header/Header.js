import React,{useContext,useState} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import PATH from '../../Path';
import logo from '../../assets/Logotruonglqd.jpg';
import Navbar from '../Navbar/Navbar';

import AccountManageContext from '../../Contexts/AccountManage/AccountManage';


const Header = (props) =>{
    let accountManager=useContext(AccountManageContext);
    const [status,setStatus]=useState(accountManager.doCheck());
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
            <Link onClick={
                ()=>{
                    accountManager.doLogout();
                    setStatus(accountManager.doCheck());
                }

            }
                to={PATH.HOME}>
                Log Out
            </Link>
            
        </div>
    );    
    return (
        <div id="Header">
            {(status===false)?toLogin:loggedIn}
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