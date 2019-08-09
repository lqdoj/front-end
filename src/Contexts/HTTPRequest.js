import api from '../PathApi';

const doPost = async (url,data,header={} ) =>{
    let a={
        method:'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            ...header,
        }};
        console.log(a);
    let response = await fetch(api+url,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                ...header,
            },
            body: JSON.stringify({
                data:data
            })
        });
    return response;
}

export {doPost};