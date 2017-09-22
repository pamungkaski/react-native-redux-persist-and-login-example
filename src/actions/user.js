/**
 * Created by iampamungkas on 9/22/17.
 */
import deleteProperty from '../helper'
export const CREATE_USER_REQUEST = 'CREATE_USER_REQUEST'
export const CREATE_USER_RESPONSE = 'CREATE_USER_RESPONSE'
export const UPDATE_USER_REQUEST = 'UPDATE_USER_REQUEST'
export const UPDATE_USER_RESPONSE = 'UPDATE_USER_RESPONE'
export const DELETE_USER_REQUEST = 'DELETE_USER_REQUEST'
export const DELETE_USER_RESPONSE = 'DELETE_USER_RESPONSE'
export const CHECK_USERNAME_REQUEST = 'CHECK_USERNAME_REQUEST'
export const CHECK_USERNAME_RESPONE = 'CHECK_USERNAME_RESPONE'

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

createUser = (credential) => {
    return dispatch => {
        dispatch(createUserRequest(credential))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(createUserResponse(credential, response.data)))
    }
}

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

deleteUser = (credential) => {
    return dispatch => {
        dispatch(updateUserRequest(credential))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(updateUserResponse(credential, response.data)))
    }
}

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

deleteUser = (credential) => {
    return dispatch => {
        dispatch(deleteUserRequest(credential))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(deleteUserResponse(credential, response.data)))
    }
}


checkUsernameRequest = (username) => {
    return {
        type: CHECK_USERNAME_REQUEST,
        username
    }
}

deleteUserResponse = (username, response) => {
    return {
        type: CHECK_USERNAME_RESPONSE,
        username,
        status: response.status,
        message: response.message
    }
}

deleteUser = (username) => {
    return dispatch => {
        dispatch(checkUsernameRequest(username))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(checkUsernameResponse(username, response.data)))
    }
}