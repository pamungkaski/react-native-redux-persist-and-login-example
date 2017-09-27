/**
 * Created by iampamungkas on 9/24/17.
 */
'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, BackHandler, TouchableOpacity, StatusBar } from 'react-native'
import { NavigationActions }  from 'react-navigation'
const mapStateToProps = (state) => {
    return {
        loginUser: state.loginUser
    }
}

class HomeScreen extends Component{
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
        const { navigation } = this.props
        return(
            <View style={container}>
                <StatusBar backgroundColor="#ffffff"/>
                <TouchableOpacity onPress={()=> this.props.loginUser.status ? navigation.navigate("DashboardNavigation") : navigation.navigate("LoginNavigation")}>
                    <View  style={container}>
                        <Text style={tap}> TAP ANYWHERE </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}
const tap = {
    fontSize: 25,
    color: '#2ecc71',
    fontWeight: "bold"
}
const container = {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: 'center',
}
export default connect(mapStateToProps)(HomeScreen)