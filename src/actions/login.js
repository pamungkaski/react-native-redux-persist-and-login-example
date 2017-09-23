/**
 * Created by iampamungkas on 9/21/17.
 */
export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST'
export const FORGOT_PASSWORD_RESPONSE = 'FORGOT_PASSWORD_RESPONSE'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE'
export const LOGOUT = 'LOGOUT'


//Login Action
loginRequest = (credential) => {
    return {
        type: LOGIN_REQUEST,
        credential
    }
}

loginResponse = (credential, response) => {
    credential.password = ''
    return {
        type: LOGIN_RESPONSE,
        credential,
        status: response.status,
        message: response.message,
        profile: response.profile
    }
}

export const login = (credential) => {
    return dispatch => {
        dispatch(loginRequest(credential.username))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(loginResponse(credential, response.data)))
    }
}

export const logout = (status) => {
    return {
        type: LOGOUT,
        status: status
    }
}


//Forgot Password Action
forgotPasswordRequest = (credential) => {
    return {
        type: LOGIN_REQUEST,
        credential
    }
}

forgotPasswordResponse = (credential, response) => {
    return {
        type: FORGOT_PASSWORD,
        credential,
        message: response.message
    }
}

export const forgot = (credential) => {
    return dispatch => {
        dispatch(forgotPasswordRequest(credential.email))
        return Axios.post('https://genwis.herokuapp.com/itinerary',JSON.stringify(credential))
            .then(response => dispatch(forgotPasswordRespone(credential.email, response.data)))
    }
}