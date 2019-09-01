import React,{useState,useContext} from 'react';
import {Redirect} from 'react-router-dom';
import PATH from '../../Routes/Path';
import {AccountManageContext} from '../../Contexts/Contexts';


import "bootstrap/dist/css/bootstrap.min.css";

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
                <form>
                    <div className="form-group">
                    <label>First Name:</label>
                    <input id="register-firstname" type="text"/>
                    </div>
                    <div className="form-group">
                    <label for="register-lastname">Last Name:</label>
                    <input id="register-lastname" type="text"/>
                    </div>
                    <div className="form-group">
                    <label for="register-dob">Date of Birth:</label>
                    <input id="register-dob" type="date"/>
                    </div>
                    <div className="form-group">
                    <label for="register-username"> User Name:</label>
                    <input id="register-user-name" type="text"/>
                    </div>
                    <div className="form-group">
                    <label for="register-email"> Email: </label>
                    <input id="register-email" type="email"/>
                    </div>
                    <div className="form-group">
                    <label for="register-password"> Password:</label>
                    <input id="register-password" type="password"/>
                    </div>
                    <div className="form-group">
                    <label for="register-password2"> ReEnter Password:</label>
                    <input id="register-password2" type="password"/>
                    </div>
                    
                    
                    <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
            )}
        </div>
    )
}

export default SignUpSection;
