import React,{useState,useContext} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Routes/Path';
import {AccountManageContext} from '../../Contexts/Contexts';

const SignUpSection = () =>{
    let accountManager=useContext(AccountManageContext);
    const [status,setStatus]=useState([false,""]);
    const handleSubmit = async (e)=>{
        const firstname=document.getElementById("register-firstname").value;
        const lastname=document.getElementById("register-lastname").value;
        const dob=document.getElementById("register-dob").value;
        const username=document.getElementById("register-user-name").value;
        const email=document.getElementById("register-email").value;
        const password=document.getElementById("register-password").value;
        const password2=document.getElementById("register-password2").value;
        if (username==="" || email==="" || password==="" || firstname==="" || lastname==="" || !dob) {console.log("error");return;}
        let response = await accountManager.doSignUp(
            {
                firstname:firstname,
                lastname:lastname,
                dob:dob,
                username:username,
                email:email,
                password1:password,
		        password2:password2
            })
        setStatus(prev=>{
            return response    
        });
    }
    return(
        <div>
            <div>{status[1]}</div>
            {(status[0])?
            <Redirect to={PATH.HOME}/>
            :(<React.Fragment>
                <label>First Name:</label>
                <input id="register-firstname" type="text"/>
                <label>Last Name:</label>
                <input id="register-lastname" type="text"/>
                <label>Date of Birth:</label>
                <input id="register-dob" type="date"/>
                <label> User Name:</label>
                <input id="register-user-name" type="text"/>
                <label> Email: </label>
                <input id="register-email" type="email"/>
                <label> Password:</label>
                <input id="register-password" type="password"/>
                <label> ReEnter Password:</label>
                <input id="register-password2" type="password"/>
                <button onClick={handleSubmit}> submit</button>
            </React.Fragment>
            )}
        </div>
    )
}

export default SignUpSection;
