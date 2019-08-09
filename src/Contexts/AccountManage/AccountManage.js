import React from 'react';
import {doPost} from '../HTTPRequest';
import {PATH} from '../../PathApi';
const AccountManageContext = React.createContext(null);
class AccountManager{
    constructor(){
        this.currentState=false;
    }
    async doSignUp(data){
        try{
            console.log(data);
            let response = await doPost(PATH.SIGNUP,data);
            if (response.status===201) 
                return [true];
            let responseData = await response.json();
            return [false,responseData];
        }
        catch(error){
            console.log(error);
        }
    }
    doCheck(){
        console.log("CHECK");
        return this.currentState;
    }
    async doLogin(data){
        try{
            console.log(data);
            let response = await doPost(PATH.LOGIN,data);
            let responseData = await response.json();
            console.log(responseData);
            return true;
        }
        catch (error){
            console.log(error);
        }
    }
    doLogout(){
        this.currentState=false;
        console.log(this.currentState);
    }
}

export default AccountManageContext;
export {AccountManager};
