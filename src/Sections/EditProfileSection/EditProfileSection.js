import React,{useState,useContext} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Routes/Path';
import {AccountManageContext} from '../../Contexts/Contexts';

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
                <label> New First Name:</label>
                <input id="change-first-name" type="text"/>
                <label> New Last Name:</label>
                <input id="change-last-name" type="text"/>
                <label> New Email:</label>
                <input id="change-email" type="text"/>
                <button onClick={handleSubmit}> submit</button>
            </React.Fragment>
            )}
        </div>
    )
}

export default EditProfileSection;
