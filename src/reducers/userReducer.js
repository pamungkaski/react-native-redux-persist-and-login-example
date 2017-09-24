/**
 * Created by iampamungkas on 9/22/17.
 */
import {
    CREATE_USER_REQUEST,
    CREATE_USER_RESPONSE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_RESPONSE,
    DELETE_USER_REQUEST,
    DELETE_USER_RESPONSE,
    CHECK_USERNAME_REQUEST,
    CHECK_USERNAME_RESPONSE
} from '../actions/user'

export const createUser = (
    state = {
        isFetching: false,
        status: false,
    }, action
) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case CREATE_USER_RESPONSE:
            return {
                ...state,
                isFetching: false,
                status: action.status,
                message: action.message
            }
        default:
            return state
    }
}


export const updateUser = (
    state = {
        isFetching: false,
        status: false,
    }, action
) => {
    switch (action.type) {
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case UPDATE_USER_RESPONSE:
            return {
                ...state,
                isFetching: false,
                status: action.status,
                message: action.message
            }
        default:
            return state
    }
}

export const deleteUser = (
    state = {
        isFetching: false,
        status: false,
    }, action
) => {
    switch (action.type) {
        case DELETE_USER_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case DELETE_USER_RESPONSE:
            return {
                ...state,
                isFetching: false,
                status: action.status,
                message: action.message
            }
        default:
            return state
    }
}

export const checkUsername = (
    state = {
        isFetching: false,
        status: false,
    }, action
) => {
    switch (action.type) {
        case CHECK_USERNAME_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case CHECK_USERNAME_RESPONSE:
            return {
                ...state,
                isFetching: false,
                status: action.status,
                message: action.message
            }
        default:
            return state
    }
}