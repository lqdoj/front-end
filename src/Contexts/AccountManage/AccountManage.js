import React from 'react';




class AccountManage{
    constructor(){
        this.logginStatus=true;
    }
    currentLog = () =>{
        return this.logginStatus;
    }
    
    doLogIn = () =>{
        this.logginStatus=true;
    }
    
    doLogOut = () =>{
        this.logginStatus=false;
    }
    
}

const AccountManageContext = React.createContext(
    null
);

export default AccountManageContext;
export {AccountManage}