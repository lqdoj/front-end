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
                <div class="row justify-content-center align-items-center">
                    <div class="col-md-6">
                        <div class="col-md-12">                            
                            <div class="text-center border border-light p-5">
                                <div class="row justify-content-right align-items-right">
                                    <p class="h4 mb-4">Sign in</p>
                                </div>                                

                                <input type="text" id="login-user-name" class="form-control mb-4" placeholder="Username"/>
                
                                <input type="password" id="login-password" class="form-control mb-4" placeholder="Password"/>

                                <div class="d-flex justify-content-around">
                                    <div>                                        
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"/>
                                            <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                                        </div>
                                    </div>
                                    <div>                                        
                                        <a href="">Forgot password?</a>
                                    </div>
                                </div>

                                
                                <button type="button" class="btn btn-info btn-block my-4" onClick={handleLogin}>Sign in</button>

                                <p>Not a member?
                                    <a href="/user/sign-up"> Register</a>
                                </p>                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
        </div>
    )
}

export default LoginSection;
