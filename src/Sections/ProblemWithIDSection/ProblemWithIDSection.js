import React from 'react';
import NotFound from '../NotFound/NotFound';

const listOfID=['0000','0001','0002'];

const ProblemWithIDSection = (props) =>{
    const id=props.match.params.id;
    if (listOfID.includes(id))
    return(
        <div>
        This is problem {id}
        </div>
    );
    else return <NotFound/>
}
export default (ProblemWithIDSection);