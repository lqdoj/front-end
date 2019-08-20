import React from 'react';
import './AnnouncementWithIDSection.css';

const AnnouncementWithIDSection = (props) =>{
    const id=props.match.params.id;
    return(
        <div>
            This is the announcement id : {id}
        </div>
    )
}

export default AnnouncementWithIDSection;