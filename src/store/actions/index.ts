import { ActionConstent} from "constants/store";
import { Employee, Personal } from "interfaces";

export const setPersonalInformation = (payload: Personal) => {
    return { type: ActionConstent.SET_PERSONAL_INFORMATION, payload }
}

export const setEmployeeInformation = (payload: Employee) => {
    return { type: ActionConstent.SET_EMPLOYEE_INFORMATION, payload }
}
