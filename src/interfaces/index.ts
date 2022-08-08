import { ActionConstent, WorkStatus } from "../constants/store"

export interface ActionType {
    type: ActionConstent
    payload?: any
}

export interface Personal {
    firstName: string
    lastName: string
    dob: string
    ssn: number | ''
}

export interface Employee {
    name: '',
    grossSalary: 0,
    workStatus: WorkStatus | ''
}

export interface Information {
    personal: Personal,
    employee: Employee,
}

export interface InitialStateType {
    information: Information
}