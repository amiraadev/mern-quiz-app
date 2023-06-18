import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

import * as Action from '../redux/questionReducer'
import { getServerData } from "../helper/helper";


export const useFetchQuestion = () => {

const dispatch = useDispatch()

const [getData ,setGetData] = useState({
    isLoading:false,
    apiData : [],
    serverError : null
});

useEffect(() =>{

        setGetData(prev => ({...prev ,isLoading:true}));


        ( async ()=> {
        try {

        //  let question = await data;
           
          const q = await getServerData(`${import.meta.env.VITE_REACT_APP_SERVER_HOSTNAME}/api/questions`,(data) => data)
        //    console.log(q);

            let question = q[0].questions;
            let answers = q[0].answers;

            if(question.length > 0) {
                setGetData(prev => ({...prev ,isLoading:false}));
                setGetData(prev => ({...prev ,apiData:{question,answers}}));

                dispatch(Action.startExamAction({question,answers}))
            }
            else {
                throw new Error("No question available")
            }
        } catch (error) {
                setGetData(prev => ({...prev ,isLoading:false}))
                setGetData(prev => ({...prev ,serverError:error}))
        }
        })();


},[dispatch])
// console.log(getData);
return [getData ,setGetData]
}


export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}
