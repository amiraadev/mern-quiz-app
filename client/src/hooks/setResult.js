import { postServerData } from "../helper/helper"
import * as Action from "../redux/resultReducer"

export const PushAnswer = (result) => async (dispatch) =>{
  
 try {
    await dispatch(Action.pushResultAction(result))
 } catch (error) {
    console.log(error)
 }

}

export const updateResult = (index) => async (dispatch) =>{
  
 try {
    await dispatch(Action.updateResultAction(index))
 } catch (error) {
    console.log(error)
 }

}

// insert user data 

export const usePublishResult = (resultData) => {
   const { result, username } = resultData;
   (async () => {
       try {
           if(result !== [] && !username) throw new Error("Couldn't get Result");
           await postServerData(`${import.meta.env.VITE_REACT_APP_SERVER_HOSTNAME}/api/results`, resultData, data => data)

       } catch (error) {
           console.log(error)
       }
   })();
}

