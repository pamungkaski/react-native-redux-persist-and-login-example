/**
 * Created by iampamungkas on 9/26/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, Dimensions, ToolbarAndroid, ScrollView, StatusBar, BackHandler} from 'react-native'
import {connect} from 'react-redux'
import { NavigationActions } from 'react-navigation'
import ActionButton from 'react-native-action-button'
import DashboardItemComp from './DashboardItemComp'
const mapStateToProps = (state) => {
    return {
        data: state.database.data
    }
}
class DashboardScreen extends Component{
    static navigationOptions = {
        header: null,
    }
    onActionSelected = () => {
        const { navigation } = this.props
        navigation.navigate('ProfileNavigation')
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }
    onBackPress = () => {
        const { dispatch, state, navigation } = this.props.navigation
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
        const { navigation, data } = this.props
        return(
            <View style={container}>
                <StatusBar backgroundColor="#2ecc71"/>
                <ToolbarAndroid style={Toolbar} titleColor="#ffffff" title={"Dashboard"} actions={ [{title: 'Profile', icon: require('./user_circle2.png'), show: 'always'}]} onActionSelected={this.onActionSelected}/>
                <ScrollView>
                    <DashboardItemComp item={data} navigation={navigation}/>
                </ScrollView>
                <ActionButton  buttonColor='#2bbbff' title="New Item" onPress={() => navigation.navigate("ItemNavigation")}>
                </ActionButton>
            </View>
        )
    }
}
const d = Dimensions.get('window')
const actionButtonIcon = {
    fontSize: 20,
    height: 22,
    color: 'white',
}
const container = {
    flex: 1,
    backgroundColor: '#ffffff',
}
const Toolbar = {
    backgroundColor: "#2ecc71",
    height: 70
}
export default connect(mapStateToProps)(DashboardScreen)