import { createSlice } from "@reduxjs/toolkit";

/** create reducer */
export const wrongAnswerReducer = createSlice({
    name: 'wrongAnsweredQuestions',
    initialState : {
        queueWrongAnswered: ["rrrr"],
        correctIndex : [],
        wrongIndex : [],
        traceVerif : 0
    },
    reducers : {
        startVerification : (state, action) => {
            let { question} = action.payload
            // console.log(question);
            return {
                ...state,
                queueWrongAnswered : question,
                
            }
        },
        moveNextVerif : (state) => {
            return {
                ...state,
                traceVerif : state.traceVerif + 1
            }
        },
        movePrevVerif : (state) => {
            return {
                ...state,
                traceVerif : state.traceVerif - 1
            }
        },
        resetTraceVerif : (state) => {
            return {
                ...state,
                traceVerif : 0
            }
        }
    }
})

export const { startVerification, moveNextVerif, movePrevVerif, resetTraceVerif } = wrongAnswerReducer.actions;

export default wrongAnswerReducer.reducer;