/**
 * Created by iampamungkas on 9/24/17.
 */
'use strict'

import { StackNavigator } from 'react-navigation'

//Navigators
import HomeScreen from './views/HomeScreen'
import LoginNavigation from '../Login/views/LoginNavigation'
import DashboardNavigation from '../Dashboard/views/DashboardNavigation'
import ItemNavigation from '../Item/views/ItemNavigation'
import ProfileNavigation from '../Profile/views/ProfileNavigation'
const routeConfiguration = {
    HomeScreen: { screen: HomeScreen },
    LoginNavigation: { screen: LoginNavigation },
    DashboardNavigation: { screen: DashboardNavigation},
    ItemNavigation: { screen: ItemNavigation},
    ProfileNavigation: { screen: ProfileNavigation}
}
export const NavigatorHome = StackNavigator(routeConfiguration)