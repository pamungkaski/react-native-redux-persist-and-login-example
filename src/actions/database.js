/**
 * Created by iampamungkas on 9/22/17.
 */
import { deleteProperty } from '../helper'
export const CREATE_DATA_REQUEST = 'CREATE_DATA_REQUEST'
export const CREATE_DATA_RESPONSE = 'CREATE_DATA_RESPONSE'
// Create Data Action
createDataRequest = (data) => {
    return {
        type: CREATE_DATA_REQUEST,
        data,
    }
}

createDataResponse = (data) => {
    return {
        type: CREATE_DATA_RESPONSE,
        data,
    }
}

export const createData = (data) => {
    return dispatch => {
        // Sorting
        const keys = Object.keys(data)
        keys.sort()
        const dummy = {}
        const len = keys.length;
        for (i = 0; i < len; i++) {
            dummy[keys[i]] = data[keys[i]]
        }

        dispatch(createDataRequest(dummy))
        // return Axios.post('URL',JSON.stringify(data))
        //     .then(response => dispatch(createDataResponse(data, response.data)))
        return dispatch(createDataResponse(dummy))
    }
}

//Update Data Action
export const UPDATE_DATA_REQUEST = 'UPDATE_DATA_REQUEST'
export const UPDATE_DATA_RESPONSE = 'UPDATE_DATA_RESPONE'
updateDataRequest = (data) => {
    return {
        type: UPDATE_DATA_REQUEST,
        data
    }
}

updateDataResponse = (data) => {
    return {
        type: UPDATE_DATA_RESPONSE,
        data: data
    }
}

export const updateData = (data) => {
    return dispatch => {
        dispatch(updateDataRequest(data))
        // return Axios.post('URL',JSON.stringify(data))
        //     .then(response => dispatch(createDataResponse(data, response.data)))
        return dispatch(createDataResponse)
    }
}

//Delete Data Action
export const DELETE_DATA_REQUEST = 'DELETE_DATA_REQUEST'
export const DELETE_DATA_RESPONSE = 'DELETE_DATA_RESPONSE'
deleteDataRequest = (data) => {
    return {
        type: DELETE_DATA_REQUEST,
        data
    }
}

deleteDataResponse = (data) => {
    return {
        type: DELETE_DATA_RESPONSE,
        data: data
    }
}

export const deleteData = (data) => {
    return dispatch => {
        dispatch(deleteDataRequest(data))
        // return Axios.post('URL',JSON.stringify(data))
        //     .then(response => dispatch(createDataResponse(data, response.data)))
        return dispatch(createDataResponse)
    }
}
