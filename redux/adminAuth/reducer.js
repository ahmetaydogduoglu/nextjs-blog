import {
    SET_VISIBILITY_FILTER,
} from './actionTypes'

const initialState = {
    adminContent: null
}

export default function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                adminContent: action.payload
            }
        default:
            return state
    }
}