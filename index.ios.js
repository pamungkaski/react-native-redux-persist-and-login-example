import React, { Component } from 'react';
import {
    AppRegistry,
    View,
    AsyncStorage
} from 'react-native';
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux'
import HomeNavigation from './src/components/Home/views/HomeNavigation'
import { persistStore } from 'redux-persist'

const store = configureStore();
persistStore(store, {storage: AsyncStorage, blacklist:['Home', 'Login']})
export default class RegEdit extends Component {
    render() {
        return (
            <Provider store={store}>
              <View style={container1}>
                <HomeNavigation/>
              </View>
            </Provider>
        );
    }
}

const container1 = {
    backgroundColor: "#ffffff",
    flex: 1
};
AppRegistry.registerComponent('RegEdit', () => RegEdit);
