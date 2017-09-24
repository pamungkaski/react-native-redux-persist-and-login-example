/**
 * Created by iampamungkas on 9/24/17.
 */
'use strict'

import { StackNavigator } from 'react-navigation'

//Navigators
import HomeScreen from './views/HomeScreen'

const routeConfiguration = {
    HomeScreen: { screen: HomeScreen }
}
export const NavigatorHome = StackNavigator(routeConfiguration)