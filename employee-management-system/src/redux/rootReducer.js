import { combineReducers } from 'redux';
import { employeeReducer } from './employee/employeeReducer';

const rootReducer = combineReducers({
    employees: employeeReducer,
    // other reducers
});

export default rootReducer;
