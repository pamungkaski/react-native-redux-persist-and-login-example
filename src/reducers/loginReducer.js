/**
 * Created by iampamungkas on 9/22/17.
 */
import {
    LOGIN_RESPONSE,
    LOGIN_REQUEST,
    LOGOUT,
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_RESPONSE
} from '../actions/login'


export const forgotPassword = (
    state = {
        isFetching:false,
        status: false,
    }, action
) => {
    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FORGOT_PASSWORD_RESPONSE:
            return {
                ...state,
                status: action.status,
                message: action.message
            }
        default:
            return state
    }
}

export const loginUser = (
    state = {
        isFetching: false,
        status: false,
    }, action
) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case LOGIN_RESPONSE:
            return action.statu ? {
                ...state,
                isFetching: false,
                status: action.status,
                message: action.message,
                profile: action.profile
            } : {
                ...state,
                isFetching: false,
                status: action.status,
                message: action.message
            }
        case LOGOUT:
            return {
                ...state,
                status: false,
                message:'',
                profile:{}
            }
        default:
            return state
    }
}
