import React,{useState,useContext} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Routes/Path';
import {AccountManageContext} from '../../Contexts/Contexts';

import 'bootstrap/dist/css/bootstrap.min.css';//include css

const ChangePasswordSection = (props) =>{
    let accountManager=useContext(AccountManageContext);
    const [status,setStatus]=useState([false,""]);
    const handleSubmit = async (e)=>{
        const oldpassword=document.getElementById("change-old-password").value;
        const password=document.getElementById("change-new-password").value;
        const password2=document.getElementById("change-new-password2").value;
        if (oldpassword===""||password===""||password2==="") {console.log("error");return;}
        let response = await accountManager.doChangePassword(
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
                <form>
                <div className="form-group">
                    <label for="change-old-password"> Old Password:</label>
                    <input id="change-old-password" type="password"  placeholder="Enter Password"/>
                </div>
                <div className="form-group">
                <label for="change-new-password"> New Password:</label>
                <input id="change-new-password" type="password"   placeholder="Enter new Password"/>
                </div>
                <div className="form-group">
                <label for="change-new-password2"> ReEnter New Password:</label>
                <input id="change-new-password2" type="password"  placeholder="ReEnter new Password"/>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary"> Submit</button>
                </form>
            </React.Fragment>
            )}
        </div>
    )
}

export default ChangePasswordSection;
