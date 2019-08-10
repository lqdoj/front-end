import React,{useContext,useState} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Path';

import AccountManageContext from '../../Contexts/AccountManage/AccountManage';
const LoginSection = (props)=>{
    let accountManager=useContext(AccountManageContext);
    console.log(accountManager);
    let setter=props.setLogin;
    const [status,setStatus]=useState([false,""]);
    const handleLogin = async (e)=>{
        const username=document.getElementById("login-user-name").value;
        const password=document.getElementById("login-password").value;
        if (username==="" || password==="") {console.log("error");return;}
        let response = await accountManager.doLogin(
            {
                username:username,
                password:password
            });
        if (response[0]) setter(true);
        setStatus(prev=>{
            return response    
        })
    }
    return (
        <div>
            <div>{status[1]}</div>
        {status[0]?<Redirect to={PATH.HOME}/>:(
            <div>
        <label> User Name:</label>
        <input id="login-user-name" type="text"/>
        <label> Password:</label>
        <input id="login-password" type="password"/>
        <button onClick={handleLogin}> Log in</button>
        </div>
    )}
        </div>
    )
}

export default LoginSection;
