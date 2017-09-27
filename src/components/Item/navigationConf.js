/**
 * Created by iampamungkas on 9/26/17.
 */
'use strict'

import { StackNavigator } from 'react-navigation'

//Navigators
import ItemScreen from './views/ItemScreen'

const routeConfiguration = {
    ItemScreen: { screen: ItemScreen },
}
export const NavigatorItem = StackNavigator(routeConfiguration)