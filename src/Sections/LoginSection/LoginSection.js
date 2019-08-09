import React,{useContext,useState} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Path';

import AccountManageContext from '../../Contexts/AccountManage/AccountManage';
const LoginSection = ()=>{
    let accountManager=useContext(AccountManageContext);
    const [status,setStatus]=useState(false);
    const handleLogin = async (e)=>{
        const username=document.getElementById("login-user-name").value;
        const password=document.getElementById("login-password").value;
        if (username==="" || password==="") {console.log("error");return;}
        let response = await accountManager.doSignUp(
            {
                username:username,
                password:password
            })
        setStatus(prev=>{
            return response    
        })
    }
    return (
        <div>
        {status?<Redirect to={PATH.HOME}/>:(
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
