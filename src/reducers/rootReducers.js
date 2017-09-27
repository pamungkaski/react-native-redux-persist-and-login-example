/**
 * Created by iampamungkas on 9/22/17.
 */
import { combineReducers } from 'redux'
import {
    user,
    checkUsername
} from './userReducer'
import {
    loginUser
} from './loginReducer'
import {
    database
} from './databaseReducer'
import { NavigatorHome } from '../components/Home/navigationConf'
import { NavigatorLogin } from '../components/Login/navigationConf'
import { NavigatorDashboard } from '../components/Dashboard/navigationConf'
import { NavigatorItem } from '../components/Item/navigationConf'
import { NavigatorProfile } from '../components/Profile/navigationConf'
const rootReducer = combineReducers({
    user,
    checkUsername,
    loginUser,
    database,
    Home: (state,action) => NavigatorHome.router.getStateForAction(action,state),
    Login: (state,action) => NavigatorLogin.router.getStateForAction(action,state),
    Dashboard: (state,action) => NavigatorDashboard.router.getStateForAction(action,state),
    Item: (state,action) => NavigatorItem.router.getStateForAction(action,state),
    Profile: (state,action) => NavigatorProfile.router.getStateForAction(action,state)

})

export default rootReducer