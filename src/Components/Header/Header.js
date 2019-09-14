import React,{useContext} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import PATH from '../../Routes/Path';
import logo from '../../assets/lqd-coders.png';
import Navbar from '../Navbar/Navbar';
import {ButtonToolbar, Button} from 'react-bootstrap';

import AccountManageContext from '../../Contexts/AccountManage/AccountManage';


const Header = (props) =>{
    let accountManager=useContext(AccountManageContext);
    console.log(accountManager);
    let setter=props.setLogin;
    const toLogin = (
        <ButtonToolbar className="header-component_login-bar">
            <Button href={PATH.LOGIN} type="button" size="md" variant="outline-dark">
                Đăng nhập
            </Button>
            <Button href={PATH.SIGNUP} type="button" size="md" variant="outline-danger">
                Đăng ký
            </Button>
        </ButtonToolbar>
    );    
    const loggedIn =  (
        <div className="header-component_login-bar">
            <span> Hi <Link to={`${PATH.PROFILE}${accountManager.info.username}/`}>{accountManager.info.username}</Link></span>
            <Link onClick={()=>{
                const logOut= async()=>{
                    await accountManager.doLogout();
                    setter(false);
                }
                    logOut();
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
                    <img 
                        src={logo} 
                        className="top-logo" 
                        alt="le quy don logo"
                    />
                </a>
            </div>
            <Navbar listOfSections={props.listOfSections}/>

        </div>
    )
}
export default Header;