/**
 * Created by iampamungkas on 9/22/17.
 */
import { deleteProperty } from '../helper'
export const CREATE_DATA_REQUEST = 'CREATE_DATA_REQUEST'
export const CREATE_DATA_RESPONSE = 'CREATE_DATA_RESPONSE'
// Create Data Action
createDataRequest = (credential) => {
    return {
        type: CREATE_DATA_REQUEST,
        credential: deleteProperty(credential, 'password')
    }
}

createDataResponse = (credential, response) => {
    return {
        type: CREATE_DATA_RESPONSE,
        credential: deleteProperty(credential, 'password'),
        status: response.status,
        message: response.message
    }
}

export const createData = (credential) => {
    return dispatch => {
        dispatch(createDataRequest(credential))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(createDataResponse(credential, response.data)))
    }
}

//Update Data Action
export const UPDATE_DATA_REQUEST = 'UPDATE_DATA_REQUEST'
export const UPDATE_DATA_RESPONSE = 'UPDATE_DATA_RESPONE'
updateDataRequest = (credential) => {
    return {
        type: UPDATE_DATA_REQUEST,
        credential: deleteProperty(credential, 'password')
    }
}

updateDataResponse = (credential, response) => {
    return {
        type: UPDATE_DATA_RESPONSE,
        credential: deleteProperty(credential, 'password'),
        status: response.status,
        message: response.message
    }
}

export const updateData = (credential) => {
    return dispatch => {
        dispatch(updateDataRequest(credential))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(updateDataResponse(credential, response.data)))
    }
}

//Delete Data Action
export const DELETE_DATA_REQUEST = 'DELETE_DATA_REQUEST'
export const DELETE_DATA_RESPONSE = 'DELETE_DATA_RESPONSE'
deleteDataRequest = (credential) => {
    return {
        type: DELETE_DATA_REQUEST,
        credential: deleteProperty(credential, 'password')
    }
}

deleteDataResponse = (credential, response) => {
    return {
        type: DELETE_DATA_RESPONSE,
        credential: deleteProperty(credential, 'password'),
        status: response.status,
        message: response.message
    }
}

export const deleteData = (credential) => {
    return dispatch => {
        dispatch(deleteDataRequest(credential))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(deleteDataResponse(credential, response.data)))
    }
}
