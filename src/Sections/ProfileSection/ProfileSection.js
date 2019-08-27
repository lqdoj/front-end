import React,{useState,useEffect,useContext} from 'react';
import {Redirect,Link} from 'react-router-dom';
import {AccountManageContext} from '../../Contexts/Contexts';
import PATH from '../../Routes/Path';

const ProfileSection = (props) =>{
    const [ifLoad,loaded]=useState(false);
    const [ifAuth,setAuth]=useState(false);
    const [profile,setProfile]=useState(null);
    let accountManager=useContext(AccountManageContext);
    useEffect(()=>{
        const getInfo = async()=>{
            let info=await accountManager.doGetUser(props.match.params.id);
            if (info[0]===false) setProfile("NotFound");
            else
            setProfile(info[1]);
        }
        getInfo();
    },[]);//trigger when Component did mount
    useEffect(()=>{
        console.log(profile);
        console.log("CHECK");
        if (profile!==null) {
            loaded(true);
            if (profile!=="NotFound")
                setAuth(props.match.params.id===accountManager.info.username);
        }
    },[profile]);
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
                <img src={profile.profile.avatar} alt=""/>
                <p>Name: {profile.first_name} {profile.last_name}</p>
                <p>username: {profile.username}</p>
                {(ifAuth)?(<div>
                    <Link to={PATH.CHANGEPASSWORD}><button>Change Password</button></Link>
                </div>):null
                }
                <p>Email: {profile.email}</p>
                <p>Joined at {profile.date_joined}</p>
                {(ifAuth)?(<div>
                    <Link to={PATH.CHANGEINFO}><button>Edit Info</button></Link>
                </div>):null
            }
            </div>
        )
    }

}
export default ProfileSection;