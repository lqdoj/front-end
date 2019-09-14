import React from 'react';
import './ProblemTag.css';
import {Link} from 'react-router-dom';
import PATH from '../../Routes/Path';
const getRate = (passed,attemped) =>{
    if (attemped===0) return "0%";
    let tempRate=passed / attemped;
    tempRate*=100;
    return `${parseInt(tempRate.toPrecision(2))}%`
}
const tagLink = (tag) => {
    return (
        <Link to={`${PATH.PROBLEMS}tags/${tag}/`}>
            {tag}
        </Link>
    )
}
const tagList = (tags) => {
    var firstElt = tags[0];
    tags.shift();
    return tags.reduce((cur, next) => {
        return (
            <>
                {cur}, {tagLink(next)}
                <></>
            </>
        )
    }, tagLink(firstElt));
}

const ProblemTag = (props) =>{
    const prob=props.prob;
    return( 
        <tr className={`problem-component ${props.attemp?(props.solved?"solved":"unsolved"):""}`}>
            <td>{prob.id}</td>
            <td><Link to={`${PATH.PROBLEMS}${prob.id}/`}>{prob.title}</Link></td>
            <td>{tagList(prob.tags)}</td>
            <td>{prob.difficulty}</td>
            <td>{getRate(prob.passed,prob.attemp)}</td>
        
        </tr>
    )
}

export default ProblemTag;