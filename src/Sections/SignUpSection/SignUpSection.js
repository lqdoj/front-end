import React,{useState,useEffect,useContext} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Path';
import AccountManageContext from '../../Contexts/AccountManage/AccountManage';

const SignUpSection = () =>{
    let accountManager=useContext(AccountManageContext);
    const [status,setStatus]=useState(false);
    const handleSubmit = async (e)=>{
        const username=document.getElementById("register-user-name").value;
        const email=document.getElementById("register-email").value;
        const password=document.getElementById("register-password").value;
        if (username==="" || email==="" || password==="") {console.log("error");return;}
        let response = await accountManager.doSignUp(
            {
                username:username,
                email:email,
                password1:password,
		password2:password
            })
        setStatus(prev=>{
            return response    
        })
    }
    return(
        <div>
            {(status)?
            <Redirect to={PATH.HOME}/>
            :(<React.Fragment>
                <label> User Name:</label>
                <input id="register-user-name" type="text"/>
                <label> Email: </label>
                <input id="register-email" type="emai"/>
                <label> Password:</label>
                <input id="register-password" type="password"/>
                <button onClick={handleSubmit}> submit</button>
            </React.Fragment>
            )}
        </div>
    )
}

export default SignUpSection;
