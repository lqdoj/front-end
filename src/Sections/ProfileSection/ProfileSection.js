import React,{useState,useEffect,useContext} from 'react';
import {Redirect,Link} from 'react-router-dom';
import {AccountManageContext} from '../../Contexts/Contexts';
import PATH from '../../Routes/Path';
const ProfileSection = (props) =>{
    const [ifLoad,loaded]=useState(false);
    const [ifAuth,setAuth]=useState(false);
    const [profile,setProfile]=useState(0);
    let accountManager=useContext(AccountManageContext);
    useEffect(()=>{
        if (ifLoad) return;
        const checkAuth = async ()=>{
            await loaded(true);
            let tryGetUser=await accountManager.doGetUser(props.match.params.id);
            
            if (tryGetUser[0])
            {
                await setProfile(tryGetUser[1]);
                console.log(profile);
                setAuth(accountManager.info.username===tryGetUser[1].username);
            }
            else
            {await setProfile("Not Found")}
            console.log(profile);
        }
        checkAuth();
    }
    ,[accountManager,props,setProfile,profile,ifLoad,loaded]);
    if (profile==="Not Found") 
    return(
        <Redirect to={PATH.HOME}/>
    )
    return(
        <div>
            {(ifAuth)?(<div><button>Edit Profile</button><Link to={PATH.CHANGEPASSWORD}><button>Change Password</button></Link></div>):null}
            <li>Username:{profile.username}</li>
        </div>
    );
}
export default ProfileSection;