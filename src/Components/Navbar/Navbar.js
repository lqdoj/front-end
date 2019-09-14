import React from 'react';
import PATH from '../../Routes/Path';
import './Navbar.css';
import { Navbar as NavBar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import {FormControl, Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ComputerIcon from '@material-ui/icons/Computer';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import HelpIcon from '@material-ui/icons/Help';
import BugReportIcon from '@material-ui/icons/BugReport';
import SearchIcon from '@material-ui/icons/Search';

const toVietnamese={
    USER:"Người dùng",
    LOGIN:"Đăng nhập",
    SIGNUP:"Đăng ký",
    CHANGEPASSWORD:"Đổi mật khẩu",
    CHANGEINFO:"Đổi thông tin",
    HOME:"TRANG CHỦ",
    CONTESTS:"CÁC KỲ THI",
    PROBLEMS:"BÀI TẬP",
    FAQ:"CÂU HỎI",
    BUG_REPORT:"BÁO CÁO LỖI",
    ANNOUNCEMENTS:"THÔNG BÁO",
    PROFILE:"Hồ sơ",
}

const additionalIcon={
    HOME:<ComputerIcon></ComputerIcon>,
    CONTESTS:<EventIcon></EventIcon>,
    PROBLEMS:<AssignmentIcon></AssignmentIcon>,
    FAQ:<HelpIcon></HelpIcon>,
    BUG_REPORT:<BugReportIcon></BugReportIcon>,
}

const customIcon = (tagName) => {
    var CustomTag = `${tagName}`;
    return (
        <CustomTag>aaa</CustomTag>
    );
}

const displaySections = (sections) =>
{
    return sections.map((section,idx)=>
        {
            return (
                <Nav.Link key={idx} href={PATH[section]} >
                    {additionalIcon[section]}
                    {toVietnamese[section]}
                </Nav.Link>
            )
        })
}

const Navbar = (props) =>{
    console.log(props.listOfSections);
    return (
        <NavBar bg="dark" variant="dark" expand="md" className="navbar-component">
            <NavBar.Toggle aria-controls="basic-navbar-nav" />
            <NavBar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {displaySections(props.listOfSections)}
                </Nav>
            </NavBar.Collapse>

            <Form inline>
                <FormControl type="text" placeholder="Tìm kiếm" className="mr-sm-1" />
                <Button variant="outline-success">
                    <SearchIcon></SearchIcon>
                    Tìm
                </Button>
            </Form>
        </NavBar>
    );
};

export default Navbar;