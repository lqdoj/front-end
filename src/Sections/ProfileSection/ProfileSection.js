import React,{useState,useEffect,useContext} from 'react';
import {Redirect,Link} from 'react-router-dom';
import {AccountManageContext} from '../../Contexts/Contexts';
import PATH from '../../Routes/Path';

import "bootstrap/dist/css/bootstrap.min.css";

const ProfileSection = (props) =>{
	let accountManager=useContext(AccountManageContext);
    const [status,setStatus]=useState([false,""]);
	const handleSubmit = async (e)=>{
        const first_name=document.getElementById("change-first-name").value;
        const last_name=document.getElementById("change-last-name").value;
        const email=document.getElementById("change-email").value;
        const username=document.getElementById("change-username").textContent;
        let image=document.getElementById("change-image").files[0];
        if (!image) image=null;
        if (first_name===""&&last_name===""&&email==="") {console.log("error");return;}
        let response = await accountManager.doChangeInfo(
            {
                first_name:(first_name==="")?accountManager.info.first_name:first_name,
                last_name:(last_name==="")?accountManager.info.last_name:last_name,
                email:(email==="")?accountManager.info.email:email,
                avatar:image,
                username:username
            })
        setStatus(prev=>{
            return response    
        });
    }

    const [ifLoad,loaded]=useState(false);
    const [profile,setProfile]=useState(null);
    useEffect(()=>{
        const getInfo = async()=>{
            let info=await accountManager.doGetUser(props.match.params.id);
            if (info[0]===false) setProfile("NotFound");
            else
            setProfile(info[1]);
        }
        getInfo();
    },[props.match.params.id,accountManager]);//trigger when Component did mount
    useEffect(()=>{
        console.log(profile);
        console.log("CHECK");
        if (profile!==null) {
            loaded(true);
        }
    },[profile,props.match.params.id]);//trigger when data is loaded
    if (ifLoad===false) return(
        <div>LOADING</div>
    );
    else{
        if (profile==="NotFound")
            return(
                <Redirect to={PATH.HOME}/>
            );
        return(
            <div>
                <div className="container">
                	<form className="row">
                		<div className="col">		            			
            				<div className="row">
            					<div className="col"></div>
            					<img className="row" src={profile.profile.avatar} alt="Ảnh đại diện"/>
            					<div className="col"></div>
            				</div>
            				<div className="row">
            					<div className="col"></div>
            					<input className="row" id="change-image" type="file" accept="image/*"/>
            					<div className="col"></div>
            				</div>
            				
                		</div>
                		<div className="col">
                			<div className="form-group">
								<label>Tên tài khoản</label>
							    <label className="form-control" id="change-username">{profile.username}</label>
							</div>
                			<div className="form-group">
								<label>Họ</label>
							    <input type="text" className="form-control" id="change-last-name" defaultValue={profile.last_name}/>
							</div>
							<div className="form-group">
								<label>Tên</label>
							    <input type="text" className="form-control" id="change-first-name" defaultValue={profile.first_name}/>
							</div>
							<div className="form-group">
								<label>Tên</label>
							    <input type="email" className="form-control" id="change-email" defaultValue={profile.email}/>
							</div>
							<div className="form-group">
								<label>Ngày tham gia</label>
							    <label className="form-control">{profile.date_joined}</label>
							</div>
							<div className="row">
								{(accountManager.info.username===props.match.params.id  )?(
			                    	<div className="col">
			                        	<Link to="." refresh="true"><button type="button" onClick={handleSubmit} className="btn btn-primary btn-block">Lưu</button></Link>
			                    	</div>):null
			                    }
								{(accountManager.info.username===props.match.params.id)?(
									<div className="col">
			                        	<Link to={PATH.CHANGEPASSWORD}><button className="btn btn-primary btn-block">Đổi mật khẩu</button></Link>
			                    	</div>):null
			                    }			                    	
							</div>                  		                    
                		</div>
                	</form>
                    
                </div>
            </div>
        )
    }

}
export default ProfileSection;