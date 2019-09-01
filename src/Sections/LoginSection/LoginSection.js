import React,{useContext,useState} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Routes/Path';

import "bootstrap/dist/css/bootstrap.min.css";

import {AccountManageContext} from '../../Contexts/Contexts';
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
                <form>
                    <div className="form-group">
                    <label for="login-user-name"> User Name:</label>
                    <input id="login-user-name" type="text"/>
                    </div>
                    <div className="form-group">
                        <label for="login-password"> Password:</label>
                        <input id="login-password" type="password"/>
                    </div>
                    <button onClick={handleLogin} className="btn btn-primary"> Log in</button>
                </form>
            </div>
        )}
        </div>
    )
}

export default LoginSection;
