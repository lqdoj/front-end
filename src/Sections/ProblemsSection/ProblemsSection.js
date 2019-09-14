import React from 'react';
import './ProblemsSection.css';
import ProblemTag from '../../Components/ProblemTag/ProblemTag';
import { Table } from 'react-bootstrap';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import MessageIcon from '@material-ui/icons/Message';
import ClassIcon from '@material-ui/icons/Class';
import StarsIcon from '@material-ui/icons/Stars';
import PollIcon from '@material-ui/icons/Poll';

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
    console.log("A");
    return(
        <div className="problems-section">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>
                        <FingerprintIcon></FingerprintIcon>
                        ID
                    </th>
                    <th>
                        <MessageIcon></MessageIcon>
                        Tên bài
                    </th>
                    <th>
                        <ClassIcon></ClassIcon>
                        Chủ đề
                    </th>
                    <th>
                        <StarsIcon></StarsIcon>
                        Độ khó
                    </th>
                    <th>
                        <PollIcon></PollIcon>
                        Lượt thử
                    </th>
                </tr>
            </thead>
            {displayedProblems}
        </Table>
        </div>
    )
}



export default ProblemsSection;