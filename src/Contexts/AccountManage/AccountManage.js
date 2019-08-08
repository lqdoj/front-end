import React from 'react';

const AccountManageContext = React.createContext(null);

class AccountManager{
    constructor(){
        this.currentState=false;
    }
    async doSignUp(data){
        console.log(data);
        const url_backend="http://127.0.0.1:8000/users/user_register/";
        let response = await fetch(url_backend,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data:data
            })
        });
        return true;
    }
    doCheck(){
        console.log("CHECK");
        return this.currentState;
    }
    async doLogin(data){
        console.log(data);
        const url_backend="http://127.0.0.1:8000/users/user_login/";
        let response = await fetch(url_backend,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data:data
            })
        });
        return true;
    }
    doLogout(){
        this.currentState=false;
        console.log(this.currentState);
    }
}

export default AccountManageContext;
export {AccountManager};
