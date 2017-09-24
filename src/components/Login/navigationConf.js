/**
 * Created by iampamungkas on 9/25/17.
 */
'use strict'

import { StackNavigator } from 'react-navigation'

//Navigators
import LoginScreen from './views/LoginScreen'
import RegisterScreen from './views/RegisterScreen'
import ForgetScreen from './views/ForgetScreen'

const routeConfiguration = {
    LoginScreen: { screen: LoginScreen },
    RegisterScreen: { screen: RegisterScreen},
    ForgetScreen: { screen: ForgetScreen}
}
export const NavigatorLogin = StackNavigator(routeConfiguration)