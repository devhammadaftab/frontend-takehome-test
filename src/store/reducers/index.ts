import { InitialStateType, ActionType } from 'interfaces'
import { ActionConstent } from 'constants/store'
import initialState from 'store/states';

const reducer = (state: InitialStateType, actions: ActionType) => {
    switch (actions.type) {
        case ActionConstent.SET_PERSONAL_INFORMATION:
            return {
                ...state,
                information: {
                    ...state.information,
                    personal: actions.payload
                }
            }
        case ActionConstent.SET_EMPLOYEE_INFORMATION:
            return {
                ...state,
                information: {
                    ...state.information,
                    employee: actions.payload
                }
            }
        default:
            return state
    }
}

export default reducer