import React from 'react';
import './Footer.css';

const linkTo = {
    "lqd": "http://www.thpt-lequydon-danang.edu.vn/",
    "bang": "https://www.facebook.com/bangjdev",
    "khanh": "https://www.facebook.com/wgiakhanh",
    "kiet": "https://www.facebook.com/tuankiet65",
    "luong": "https://luongd.xyz",
    "nho": "https://www.facebook.com/dovannho"
};

const label = {
    "lqd": "http://www.thpt-lequydon-danang.edu.vn/",
    "bang": "Bang Nguyen",
    "khanh": "Khanh Le",
    "kiet": "Kiet Ho",
    "luong": "Luong Doan",
    "nho": "Đỗ Văn Nhỏ"    
};

const linkElt = (name) => {
    return (
        <a href={linkTo[name]} target="_blank">
            {label[name]}
        </a>
    )
};

const Footer =()=>{
    return(
        <div className="footer-component">
            LQD Online Judge © TRƯỜNG THPT CHUYÊN LÊ QUÝ ĐÔN - ĐÀ NẴNG
            <br/>
            Website: {linkElt("lqd")}
            <br/>
            Developers: {linkElt("bang")}, {linkElt("khanh")}, {linkElt("kiet")}, {linkElt("luong")}. 
            <br/>
            Supported by: {linkElt("nho")}.
        </div>
    )
}

export default Footer;