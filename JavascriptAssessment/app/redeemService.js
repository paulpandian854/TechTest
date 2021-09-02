import { dataJSON } from "./constant";
const customerAccountNumber= 0001;
const portfolio='SPORTS'; //channel name

function rewardsService({ customerAccountNumber, portfolio }) {
    return {
        data: dataJSON
    }
}

function eligibilityService(customerAccountNumber){
   if(dataJSON[0].portfolio.channel1.eligible){
        console.log('eligible for rewards', dataJSON[0].portfolio.channel1.reward)
    } else{
        console.log('customer not eligible for rewards' )
    }

}


console.log(rewardsService(customerAccountNumber, portfolio, 1))
