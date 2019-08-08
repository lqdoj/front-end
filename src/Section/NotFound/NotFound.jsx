import React from 'react';
import {Link} from 'react-router-dom';
const NotFound = () =>{
    return(
        <div>
            The requested URL was not found on this server.<br></br>
            Return to <Link to="/">HomePage</Link>
        </div>
    )
}

export default NotFound;