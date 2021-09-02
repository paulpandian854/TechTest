import axios from 'axios';
import {apiUrl} from './apiConfigUrl';

/**
 * Reusable Utility
 * @returns api response 
 */

async function makeGetRequest(METHOD){
    console.log(apiUrl+METHOD)
    try{
        const response = await axios.get({
            url:apiUrl+METHOD,
            // headers: {
            //     headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            //     responseType: 'json'

            // }
        })
        console.log(response)
        return response

    }catch(error){
        console.log(error)
       // return handleError(error)

    }
}

export {makeGetRequest}