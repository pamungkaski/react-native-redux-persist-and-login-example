/**
 * Created by iampamungkas on 9/22/17.
 */
import { deleteProperty } from '../helper'
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
export const CREATE_USER_RESPONSE = 'CREATE_USER_RESPONSE'

// Create User Action
createUserRequest = (credential) => {
    return {
        type: CREATE_USER_REQUEST,
        credential: deleteProperty(credential, 'password')
    }
}

createUserResponse = (credential, response) => {
    return {
        type: CREATE_USER_RESPONSE,
        credential: deleteProperty(credential, 'password'),
        status: response.status,
        message: response.message
    }
}

export const createUser = (credential) => {
    return dispatch => {
        dispatch(createUserRequest(credential))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(createUserResponse(credential, response.data)))
    }
}

//Update User Action
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_RESPONSE = 'UPDATE_USER_RESPONE'
updateUserRequest = (credential) => {
    return {
        type: UPDATE_USER_REQUEST,
        credential: deleteProperty(credential, 'password')
    }
}

updateUserResponse = (credential, response) => {
    return {
        type: UPDATE_USER_RESPONSE,
        credential: deleteProperty(credential, 'password'),
        status: response.status,
        message: response.message
    }
}

export const updateUser = (credential) => {
    return dispatch => {
        dispatch(updateUserRequest(credential))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(updateUserResponse(credential, response.data)))
    }
}

//Delete User Action
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'
export const DELETE_USER_RESPONSE = 'DELETE_USER_RESPONSE'
deleteUserRequest = (credential) => {
    return {
        type: DELETE_USER_REQUEST,
        credential: deleteProperty(credential, 'password')
    }
}

deleteUserResponse = (credential, response) => {
    return {
        type: DELETE_USER_RESPONSE,
        credential: deleteProperty(credential, 'password'),
        status: response.status,
        message: response.message
    }
}

export const deleteUser = (credential) => {
    return dispatch => {
        dispatch(deleteUserRequest(credential))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(deleteUserResponse(credential, response.data)))
    }
}

// Check Username Action
export const CHECK_USERNAME_REQUEST = 'CHECK_USERNAME_REQUEST'
export const CHECK_USERNAME_RESPONE = 'CHECK_USERNAME_RESPONE'
checkUsernameRequest = (username) => {
    return {
        type: CHECK_USERNAME_REQUEST,
        username
    }
}

checkUsernameResponse = (username, response) => {
    return {
        type: CHECK_USERNAME_RESPONSE,
        username,
        status: response.status,
        message: response.message
    }
}

export const checkUsername = (username) => {
    return dispatch => {
        dispatch(checkUsernameRequest(username))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(checkUsernameResponse(username, response.data)))
    }
}