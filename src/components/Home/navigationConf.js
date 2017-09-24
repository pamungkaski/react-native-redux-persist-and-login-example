/**
 * Created by iampamungkas on 9/24/17.
 */
'use strict'

import { StackNavigator } from 'react-navigation'

//Navigators
import HomeScreen from './views/HomeScreen'
import LoginNavigation from '../Login/views/LoginNavigation'
const routeConfiguration = {
    HomeScreen: { screen: HomeScreen },
    LoginNavigation: { screen: LoginNavigation }
}
export const NavigatorHome = StackNavigator(routeConfiguration)