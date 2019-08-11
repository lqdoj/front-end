import React from 'react';
import Cookies from 'universal-cookie';
import {doPost,doGet} from '../HTTPRequest';
import {PATH} from '../../PathApi';

class AccountManager{
    constructor(){
        this.cookies=new Cookies();
        this.cookies.set('token',"");
    }
    async doSignUp(data){
        try{
            console.log(data);
            let response = await doPost(PATH.USER.root,data);
            if (response.status===201) 
                return [true];
            let responseData = await response.json();
            return [false,JSON.stringify(responseData)];
        }
        catch(error){
            console.log(error);
        }
    }
    async doCheck(){
        console.log("CHECK");
        try{
            console.log(this.cookies.get('token'));
            let response = await doGet(PATH.USER.ME,{"LQDOJ-TOKEN":`${this.cookies.get('token')}`});
            console.log(response);
            console.log(response.status===200);
            return (response.status===200);
        }
        catch(error){
            console.log(error);
        }
    }
    async doLogin(data){
        try{
            console.log(data);
            let response = await doPost(PATH.USER.LOGIN,data);
            let responseData = await response.json();
            console.log(responseData);
            if (response.status===200){
                this.cookies.set('token',responseData.token,{path:'/'});    
                return [true,""];
            }
            return [false,JSON.stringify(responseData)];
        }
        catch (error){
            console.log(error);
        }
    }
    async doLogout(){
        try{
            await doPost(PATH.USER.LOGOUT,null,{"LQDOJ-TOKEN":`${this.cookie.remove('token')}`});   
        }
        catch (error){
            console.log(error);
        }
    }
}
const AccountManageContext = React.createContext(new AccountManager());
export default AccountManageContext;

