import React,{useState,useContext} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Routes/Path';
import {AccountManageContext} from '../../Contexts/Contexts';

import 'bootstrap/dist/css/bootstrap.min.css';//include css

const EditProfileSection = (props) =>{
    let accountManager=useContext(AccountManageContext);
    const [status,setStatus]=useState([false,""]);
    const handleSubmit = async (e)=>{
        const first_name=document.getElementById("change-first-name").value;
        const last_name=document.getElementById("change-last-name").value;
        const email=document.getElementById("change-email").value;
        if (first_name===""&&last_name===""&&email==="") {console.log("error");return;}
        let response = await accountManager.doChangeInfo(
            {
                first_name:(first_name==="")?accountManager.info.first_name:first_name,
                last_name:(last_name==="")?accountManager.info.last_name:last_name,
                email:(email==="")?accountManager.info.email:email
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
                        <label for="change-first-name"> New First Name:</label>
                        <input id="change-first-name" type="text" placeholder={accountManager.info.first_name?accountManager.info.first_name:"enter your first name"}/>
                    </div>
                        <div className="form-group"> 
                        <label> New Last Name:</label>
                        <input id="change-last-name" type="text" placeholder={accountManager.info.last_name?accountManager.info.last_name:"enter your lastname"}/>
                    </div>
                    <div className="form-group">
                        <label for="change-email"> New Email:</label>
                        <input id="change-email" type="text" placeholder={accountManager.info.email?accountManager.info.email:"enter your email"}/>
                    </div>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
            )}
        </div>
    )
}

export default EditProfileSection;
