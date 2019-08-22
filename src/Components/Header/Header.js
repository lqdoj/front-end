import React,{useContext} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import PATH from '../../Routes/Path';
import logo from '../../assets/Logotruonglqd.jpg';
import Navbar from '../Navbar/Navbar';

import AccountManageContext from '../../Contexts/AccountManage/AccountManage';


const Header = (props) =>{
    let accountManager=useContext(AccountManageContext);
    console.log(accountManager);
    let setter=props.setLogin;
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
    const loggedIn =  (
        <div className="header-component_login-bar">
            <span> Hi <Link to={`${PATH.PROFILE}${accountManager.info.username}/`}>{accountManager.info.username}</Link></span>
            <Link onClick={()=>{
                    accountManager.doLogout();
                    setter(false);
                }
            }
            to={PATH.HOME}>
                Log Out
            </Link>
            
        </div>
    );    
    return (
        <div id="Header">
            {(props.status===false)?toLogin:loggedIn}
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