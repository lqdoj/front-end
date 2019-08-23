import api from '../PathApi';

const doPost = async (url,data,header={} ) =>{
    let response = await fetch(api+url,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            },
            body: JSON.stringify(data)
        });
    return response;
}

const doGet = async (url,header={} ) =>{
    let response = await fetch(api+url,{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            }
    });
    return response;
}


const  doDel = async (url,header={})=>{
    console.log("AAAAA"+url);
    let response = await fetch(api+url,{
        method:'DELETE',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...header,
        }
    });
    return response;
}

const doPatch = async (url,data,header={} ) =>{
    let response = await fetch(api+url,{
            method:'PATCH',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            },
            body: JSON.stringify(data)
        });
    return response;
}

const doPut = async (url,data,header={} ) =>{
    let response = await fetch(api+url,{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            },
            body: JSON.stringify(data)
        });
    return response;
}


export {doPost, doGet, doDel, doPatch, doPut};