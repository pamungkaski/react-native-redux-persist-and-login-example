/**
 * Created by iampamungkas on 9/22/17.
 */
import {
    CREATE_DATA_REQUEST,
    CREATE_DATA_RESPONSE,
    UPDATE_DATA_REQUEST,
    UPDATE_DATA_RESPONSE,
    DELETE_DATA_REQUEST,
    DELETE_DATA_RESPONSE
} from '../actions/database'

export const createData = (
    state = {
        isFetching: false,
        status: false,
    }, action
) => {
    switch (action.type) {
        case CREATE_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case CREATE_DATA_RESPONSE:
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


export const updateData = (
    state = {
        isFetching: false,
        status: false,
    }, action
) => {
    switch (action.type) {
        case UPDATE_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case UPDATE_DATA_RESPONSE:
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

export const deleteData = (
    state = {
        isFetching: false,
        status: false,
    }, action
) => {
    switch (action.type) {
        case DELETE_DATA_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case DELETE_DATA_RESPONSE:
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