import {makeGetRequest} from './apiUtil';

export async function onSearch(searchInput){
    try{
        const response= await makeGetRequest(`search?query=${searchInput}`)
        return response;


    }catch(e){
           return e;
    }
}