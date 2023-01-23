import { ADD_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE} from './employeeTypes';

export const addEmployee = (employee) => {
    return {
        type: ADD_EMPLOYEE,
        employee
    }
}

export const updateEmployee = (id, employee) => {
    return {
        type: UPDATE_EMPLOYEE,
        id,
        employee
    }
}

export const deleteEmployee = (id) => {
    return {
        type: DELETE_EMPLOYEE,
        id
    }
}
