import React from 'react';
import './ProblemTag.css';
import {Link} from 'react-router-dom';
import PATH from '../../Path';
const getRate = (passed,attemped) =>{
    if (attemped===0) return "0%";
    let tempRate=passed / attemped;
    tempRate*=100;
    return `${parseInt(tempRate.toPrecision(2))}%`
}
const ProblemTag = (props) =>{
    const prob=props.prob;
    return( 
        <tr className={`problem-component ${props.attemp?(props.solved?"solved":"unsolved"):""}`}>
            <td>{prob.id}</td>
            <td><Link to={`${PATH.PROBLEMS}${prob.id}/`}>{prob.title}</Link></td>
            <td>{prob.tags.reduce((cur,next)=>{return cur+', ' +next;})}</td>
            <td>{prob.difficulty}</td>
            <td>{getRate(prob.passed,prob.attemp)}</td>
        
        </tr>
    )
}

export default ProblemTag;