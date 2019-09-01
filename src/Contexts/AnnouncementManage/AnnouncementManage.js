import React from 'react';

import {doGet} from '../HTTPRequest';
import {PATH} from '../../PathApi';
class AnnouncementManager{
    constructor(){
        this.listOfAnnouncement=[];
    }
    async doList(page=1)
    {
        try{
            let response=await doGet(PATH.ANNOUNCEMENT.root+`?p=${page}`);
            let responseData=await response.json();
            console.log(responseData);
            return responseData;
        }
        catch(error){
            console.log(error);
        }
    };
}

const AnnouncementManageContext=React.createContext(new AnnouncementManager());
export default AnnouncementManageContext;