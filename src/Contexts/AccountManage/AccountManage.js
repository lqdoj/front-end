import React from 'react';
import {doPost} from '../HTTPRequest';
import {PATH} from '../../PathApi';

class AccountManager{
    constructor(){
        this.token="";
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
        console.log(this.token)
        return (this.token!=="");
    }
    async doLogin(data){
        try{
            console.log(data);
            let response = await doPost(PATH.LOGIN,data);
            let responseData = JSON.parse(await response.json());
            if (response.status===200){
                this.token=responseData.message;    
                return [true,""];
            }
            console.log(responseData);
            return [false,JSON.stringify(responseData.message)];
        }
        catch (error){
            console.log(error);
        }
    }
    async doLogout(){
        this.token="";
        try{
            await doPost(PATH.LOGOUT,null,{"LQDOJ-TOKEN":`${this.token}`});   
        }
        catch (error){
            console.log(error);
        }
    }
}
const AccountManageContext = React.createContext(new AccountManager());
export default AccountManageContext;

