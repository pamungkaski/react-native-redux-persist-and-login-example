/**
 * Created by iampamungkas on 9/22/17.
 */
import { combineReducers } from 'redux'
import {
    createUser,
    updateUser,
    deleteUser,
    checkUsername
} from './userReducer'
import {
    loginUser
} from './loginReducer'
import {
    createData,
    updateData,
    deleteData
} from './databaseReducer'
import { NavigatorHome } from '../components/Home/navigationConf'
import { NavigatorLogin } from '../components/Login/navigationConf'
const rootReducer = combineReducers({
    createUser,
    updateUser,
    deleteUser,
    checkUsername,
    loginUser,
    createData,
    updateData,
    deleteData,
    Home: (state,action) => NavigatorHome.router.getStateForAction(action,state),
    Login: (state,action) => NavigatorLogin.router.getStateForAction(action,state),
})

export default rootReducer