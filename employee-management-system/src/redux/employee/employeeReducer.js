import { ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from './employeeTypes';
import { employeesData } from '../../data'

const initialState = {
    employees: employeesData,
    error: null
}

export const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EMPLOYEE:
            return {
                ...state,
                employees: [...state.employees, action.employee]
            };
        case UPDATE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.map(employee => {
                    if (employee.id === action.id) {
                        return { ...employee, ...action.employee }
                    }
                    return employee;
                })
            };
        case DELETE_EMPLOYEE:
            return {
                ...state,
                employees: state.employees.filter(employee => employee.id !== action.id)
            };
        default:
            return state;
    }
}
