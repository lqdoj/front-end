import React from 'react';
import Cookies from 'universal-cookie';
import {doPost,doGet,doDel, doPatch} from '../HTTPRequest';
import {PATH} from '../../PathApi';

class AccountManager{
    constructor(){
        this.token=new Cookies();
        this.info={username:""};
        this.loadInfo=false;
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
            return [false,error];
        }
    }
    async doChangePassword(data){
        console.log(data);
        try{
            let response = await doPatch(PATH.USER.ID(this.info.username),data,{"Authorization":` Token ${this.token.get('token')}`});
            console.log(response);
            if (response.status===200)
                return [true];
            let responseData = await response.json();
            return [false,JSON.stringify(responseData)];
        }
        catch(error){
            console.log(error);
            return [false,error.toString()];
        }
    }
    async doCheck(){
        try{
            console.log(this.token.get('token'));
            let response = await doGet(PATH.USER.ME,{"Authorization":` Token ${this.token.get('token')}`});
            if (response.status===200) {
                let responseData= await response.json();
                this.loadInfo=true;
                this.info=responseData;
                return true;
            }
            else return false;
        }
        catch(error){
            console.log(error);
            return (false);
        }
    }
    async doGetUser(username){
        try{
            let response = await doGet(PATH.USER.ID(username));
            if (response.status===200){
                let responseData= await response.json();
                console.log(responseData);
                return [true,responseData];
            }
            return [false,{}];
        }
        catch(error){
            console.log(error);
            return [false,{}];
        }
    }
    async doLogin(data){
        try{
            console.log(data);
            let response = await doPost(PATH.USER.LOGIN,data);
            console.log(response);
            let responseData = await response.json();
            console.log(responseData);
            if (response.status===200){
                this.token.set('token',responseData.token,{path:'/'});    
                
                return [await this.doCheck(),""];
            }
            return [false,JSON.stringify(responseData)];
        }
        catch (error){
            console.log(error);
        }
    }
    async doLogout(){
        try{
            this.loadInfo=false;
            await doDel(PATH.USER.LOGOUT(this.token.get('token')),{"Authorization":` Token ${this.token.get('token')}`});   
            this.token.remove('token');
        }
        catch (error){
            console.log(error);
        }
    }
}
const AccountManageContext = React.createContext(new AccountManager());
export default AccountManageContext;

