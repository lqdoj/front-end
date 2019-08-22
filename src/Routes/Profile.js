import React from 'react';
import {Switch,Route} from 'react-router-dom';
import PATH from './Path';

import ProfileSection from '../Sections/ProfileSection/ProfileSection';

const ProfileRoute = (props) =>{
    return(
        <Switch>
            <Route path={`${PATH.PROFILE}:id/`} component={ProfileSection}/>
        </Switch>
    )
}

export default ProfileRoute;