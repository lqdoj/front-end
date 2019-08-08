import React from 'react';
import './ProblemsSection.css';
import ProblemTag from '../../Components/ProblemTag/ProblemTag';
const listOfProblems=[
    {
        id:"0000",
        title:"Test problem",
        tags:['dp','graph','max-flow'],
        difficulty:"superHard",
        attemp:1,
        passed:1
    },
    {
        id:"0001",
        title:"Test problem 2",
        tags:['dp','graph','max-flow'],
        difficulty:"superHard",
        attemp:1,
        passed:0
    },
    {
        id:"0002",
        title:"Test problem 3",
        tags:['dp','graph','max-flow'],
        difficulty:"superHard",
        attemp:0,
        passed:0
    }
]
const listOfSolvedProblems=["0000"];
const listOfAttempProblems=['0000','0001'];
const displayedProblems=listOfProblems.map(
    problem=>{
        return(
            <ProblemTag prob={problem} solved={listOfSolvedProblems.includes(problem.id)} attemp={listOfAttempProblems.includes(problem.id)}/>
        )
    }
)
const ProblemsSection = (props) =>{
    return(
        <div className="problems-section">
        <table>
        <tr>
            <th>id</th>
            <th>Title</th>
            <th>tags</th>
            <th>Difficulty</th>
            <th>Attemped</th>
        </tr>
            {displayedProblems}
        </table>
        </div>
    )
}

export default ProblemsSection;