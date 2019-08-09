import api from '../PathApi';

const doPost = async (url,data) =>{
    let response = await fetch(api+url,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                data:data
            })
        });
    return response;
}

export {doPost};