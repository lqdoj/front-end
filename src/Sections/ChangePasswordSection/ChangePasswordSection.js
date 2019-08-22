import React,{useState,useContext} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Routes/Path';
import {AccountManageContext} from '../../Contexts/Contexts';

const ChangePasswordSection = (props) =>{
    let accountManager=useContext(AccountManageContext);
    const [status,setStatus]=useState([false,""]);
    const handleSubmit = async (e)=>{
        const oldpassword=document.getElementById("change-old-password")
        const password=document.getElementById("change-new-password").value;
        const password2=document.getElementById("change-new-password2").value;
        if () {console.log("error");return;}
        let response = await accountManager.doSignUp(
            {
                old_password:oldpassword,
                new_password1:password,
		        new_password2:password2
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
                <label> Old Password:</label>
                <input id="change-old-password" type="password"/>
                <label> New Password:</label>
                <input id="change-new-password" type="password"/>
                <label> ReEnter New Password:</label>
                <input id="change-new-password2" type="password"/>
                <button onClick={handleSubmit}> submit</button>
            </React.Fragment>
            )}
        </div>
    )
}

export default ChangePasswordSection;
