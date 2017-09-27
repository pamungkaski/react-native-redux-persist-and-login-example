/**
 * Created by iampamungkas on 9/27/17.
 */
'use strict'

import { StackNavigator } from 'react-navigation'

//Navigators
import ProfileScreen from './views/ProfileScreen'

const routeConfiguration = {
    ProfileScreen: { screen: ProfileScreen },
}
export const NavigatorProfile = StackNavigator(routeConfiguration)