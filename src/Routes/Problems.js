import React from 'react';
import {Switch,Route} from 'react-router-dom';
import PATH from './Path';

import ProblemsSection from '../Sections/ProblemsSection/ProblemsSection';
import ProblemWithIDSection from '../Sections/ProblemWithIDSection/ProblemWithIDSection';
const ProblemsRoute = (props) =>{
    
    return(
        <Switch>
            <Route exact path={PATH.PROBLEMS} component={ProblemsSection}/>
            <Route path={`${PATH.PROBLEMS}:id/`} component={ProblemWithIDSection}/>            
        </Switch>
    )
}

export default ProblemsRoute;