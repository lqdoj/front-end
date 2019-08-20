import React from 'react';
import {Switch,Route} from 'react-router-dom';

import LoginSection from '../Sections/LoginSection/LoginSection';
import SignUpSection from '../Sections/SignUpSection/SignUpSection';

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
        </Switch>
    )
};

export default AuthenticationRoute;

