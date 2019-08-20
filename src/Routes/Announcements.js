import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PATH from './Path';

import AnnouncementWithIDSection from '../Sections/AnnouncementWithIDSection/AnnouncementWithIDSection'
const AnnouncementsRoute = (props) =>{
    return(
        <Switch>
            <Redirect exact from={PATH.ANNOUNCEMENTS} to={PATH.HOME}/>
            <Route path={`${PATH.ANNOUNCEMENTS}:id/`} component={AnnouncementWithIDSection}/>
        </Switch>
    )
}

export default AnnouncementsRoute;