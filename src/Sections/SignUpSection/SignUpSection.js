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
            <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="col-md-12">   
			                <form className="text-center border border-light p-5">
			                	<div className="row justify-content-right align-items-right">
                                    <p className="h4 mb-4 mt-4 col-md-12">Join us!</p>
                                </div> 
			                    <div classNameName="form-group row">
			                    	<div className="col">
					                    <label>First Name</label>
					                    <input id="register-firstname" type="text" className="form-control"/>
					                </div>
					                <div className="col">
					                    <label for="register-lastname">Last Name</label>
				                    <input id="register-lastname" type="text" className="form-control"/>
					                </div>
			                    </div>
			                    <div classNameName="form-group">
				                    <label for="register-dob">Date of Birth</label>
				                    <input id="register-dob" type="date" className="form-control"/>
			                    </div>
			                    <div classNameName="form-group">
				                    <label for="register-username"> User Name</label>
				                    <input id="register-user-name" type="text" className="form-control"/>
			                    </div>
			                    <div classNameName="form-group">
				                    <label for="register-email"> Email: </label>
				                    <input id="register-email" type="email" className="form-control"/>
			                    </div>
			                    <div classNameName="form-group row">
			                    	<div className="col">
					                    <label for="register-password"> Password</label>
					                    <input id="register-password" type="password" className="form-control"/>
				                	</div>
				                	<div className="col">
					                    <label for="register-password2"> ReEnter Password</label>
				                    	<input id="register-password2" type="password" className="form-control"/>
				                	</div>
			                    </div>
			                    			                   
			                    <button type="button" onClick={handleSubmit} className="btn btn-info btn-block my-4">Create account</button>

			                    <p>Already have an account?
                                    <a href="/user/log-in"> Login here</a>
                                </p> 

			                </form>
			            </div>
			        </div>
			    </div>
            </React.Fragment>
            )}
        </div>
    )
}

export default SignUpSection;
