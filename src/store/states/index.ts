import { InitialStateType } from "interfaces"

const initialState: InitialStateType = {
    information: {
        personal: {
            firstName: '',
            lastName: '',
            ssn: '',
            dob: ''
        },
        employee: {
            name: '',
            grossSalary: 0,
            workStatus: ''
        },
    }
    
}

export default initialState