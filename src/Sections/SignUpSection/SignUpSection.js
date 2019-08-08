import React,{useState,useEffect} from 'react';

const postData = (data) =>{
    console.log(data);
        const url_backend="http://127.0.0.1:8000/users/user_register/";
    fetch(url_backend,{
        method:'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            data:data
        })
    }).then(Response=>console.log(Response))
    .catch(error => console.log(error));
}

const SignUpSection = () =>{
    const [data,setData]=useState(
        {
            email:"",
            user_name:"",
            password:"",
            check:false
        }
    );
    
    const handleSubmit = (e)=>{
        const user_name=document.getElementById("register-user-name").value;
        const email=document.getElementById("register-email").value;
        const password=document.getElementById("register-password").value;
        if (user_name==="" || email==="" || password==="") {console.log("error");return;}
        setData(prev=>{
            return (
                {
                    user_name:user_name,
                    email:email,
                    password:password,
                    check:true
                }
            )
        })
    }
    useEffect(()=>{
        if (data.check) postData(data);
    });
    return(
        <div>
            <label> User Name:</label>
            <input id="register-user-name" type="text"/>
            <label> Email: </label>
            <input id="register-email" type="emai"/>
            <label> Password:</label>
            <input id="register-password" type="password"/>
            <button onClick={handleSubmit}> submit</button>
        </div>
    )
}

export default SignUpSection;