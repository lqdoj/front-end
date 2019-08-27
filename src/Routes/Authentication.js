import React from 'react';
import {Switch,Route} from 'react-router-dom';

import LoginSection from '../Sections/LoginSection/LoginSection';
import SignUpSection from '../Sections/SignUpSection/SignUpSection';
import ChangePasswordSection from '../Sections/ChangePasswordSection/ChangePasswordSection';
import EditProfileSection from '../Sections/EditProfileSection/EditProfileSection';
import PATH from './Path';

const AuthenticationRoute = (props) =>{
    const setLogin=props.setLogin;
    
    return(
        <Switch>
            <Route path={PATH.LOGIN} 
                    render = {(props)=>{
                        return(<LoginSection {...props} setLogin={setLogin}/>)
                        }}/>
            <Route path={PATH.SIGNUP} component = {SignUpSection}/>
            <Route path={PATH.CHANGEPASSWORD} component={ChangePasswordSection}/>
            <Route path={PATH.CHANGEINFO} component={EditProfileSection}/>
        </Switch>
    )
};

export default AuthenticationRoute;

