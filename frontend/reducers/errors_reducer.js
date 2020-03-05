import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_erorrs_reducer';

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer
})

export default errorsReducer;