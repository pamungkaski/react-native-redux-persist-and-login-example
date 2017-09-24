import React, { Component } from 'react';
import {
    AppRegistry,
    View
} from 'react-native';
import configureStore from './src/store/configureStore'
import { Provider } from 'react-redux'
import HomeNavigation from './src/components/Home/views/HomeNavigation'
import { persistStore } from 'redux-persist'

const store = configureStore();
if (typeof self === 'object') persistStore(store)
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
