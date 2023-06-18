import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from 'axios';

export function attemptsNumber(result){
    return result.filter(r => r !== undefined).length;
}


export function earnPointsNumber(result,answers,point){
    
    return result.map((element,i) =>{
        return answers[i] === element
    })
    .filter(i =>i)
    .map( i => point)
    .reduce( (prev,curr) => prev + curr ,0);
}


export function flagResult(totalPoints,earnPoints){
    return (totalPoints *50/100 < earnPoints );
}


export function CheckUserExist({children}){
    const auth = useSelector(state => state.result.userId)
    return auth ? children : <Navigate to ={'/'} replace></Navigate>
}


/** GET SERVER DATA */

export async function getServerData(url,callback){
    const data = await (await axios.get(url))?.data;
    return callback ? callback(data) : data ;
    
   }
   
  /** POST SERVER DATA */
export async function postServerData(url, result, callback) {
    try {

      const response = await axios.post(url, result);
      const data = response.data;
      return callback ? callback(data) : data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }



   