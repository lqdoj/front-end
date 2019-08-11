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
    console.log(header);
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

export {doPost, doGet};