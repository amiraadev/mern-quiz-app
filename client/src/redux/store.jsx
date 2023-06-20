import { combineReducers, configureStore } from '@reduxjs/toolkit';

/** call reducers */
import questionReducer from './questionReducer';
import resultReducer from './resultReducer';
import wrongAnswerReducer from './wrongAnswerReducer';

const rootReducer = combineReducers({
    questions : questionReducer,
    result : resultReducer,
    wrongAnswers : wrongAnswerReducer
})

/** create store with reducer */
export default configureStore({ reducer : rootReducer});
