/**
 * Created by iampamungkas on 9/26/17.
 */
'use strict'

import { StackNavigator } from 'react-navigation'

//Navigators
import DashboardScreen from './views/DashboardScreen'

const routeConfiguration = {
    DashboardScreen: { screen: DashboardScreen },
}
export const NavigatorDashboard = StackNavigator(routeConfiguration)