/**
 * Created by iampamungkas on 9/24/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, BackHandler } from 'react-native'
import { NavigationActions }  from 'react-navigation'
export default class HomeScreen extends Component{
    static navigationOptions = {
        header: null,
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }
    onBackPress = () => {
        const { dispatch, state } = this.props.navigation
        if (state.routeName === "Home") {
            BackHandler.removeEventListener()
            BackHandler.exitApp()
            return true
        } else {
            dispatch(NavigationActions.back())
            return true
        }
    }
    render(){
        return(
            <View >
                <Text> HELLLLO </Text>
            </View>
        )
    }
}