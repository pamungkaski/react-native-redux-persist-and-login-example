/**
 * Created by iampamungkas on 9/25/17.
 */
'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Dimensions, Button, TouchableOpacity, BackHandler, ActivityIndicator} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { login } from '../../../actions/login'
const mapStateToProps = (state) => {
    return {
        loginUser: state.loginUser,
        user: state.user.data
    }
}

class LoginScreen extends Component{
    static navigationOptions = {
        header: null,
    }
    state = {
        isOpen: false
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
    }
    onBackPress = () => {
        const { dispatch, state, navigate } = this.props.navigation
        if (state.routeName === "Home") {
            BackHandler.removeEventListener()
            BackHandler.exitApp()
            return true
        } else {
            navigate('HomeScreen')
            return true
        }
    }
    onPress = (credential) => {
        if((credential.username !== '')&&(credential.password !== '')){
            const { navigation, dispatch, user } = this.props
            this.setState({
                isOpen: true
            })
            if(user[credential.username]){
                dispatch(login(credential, user))
                if( user[credential.username].password === credential.password ){
                    this.setState({
                        isOpen: false
                    })
                    navigation.navigate('DashboardNavigation')
                } else {
                    this.setState({
                        isOpen: false
                    })
                }
            } else {
                this.setState({
                    isOpen: false
                })
            }
        }
    }
    render(){
        const { navigation } = this.props
        const credential = {
            username:'',
            password:''
        }
        return(
            <View style={container}>
                {this.state.isOpen ?
                    <ActivityIndicator size={'large'} animating={this.state.isOpen}/>
                    :
                    <View style={container1}>
                        <Text style={title}>LOGIN</Text>
                        <View>
                            <Text>Username</Text>
                            <TextInput onChangeText={(text) => credential.username = text} onSubmitEditing={() => this.refs.password.focus()} returnKeyType={'next'}/>
                        </View>
                        <View>
                            <Text>Password</Text>
                            <TextInput ref="password" onChangeText={(text) => credential.password = text} onSubmitEditing={() => this.onPress(credential)} secureTextEntry={true}/>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("ForgetScreen")}>
                            <View style={row2}>
                                <Text>Forget you Password </Text>
                                <Text style={lin}>?</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={button}><Button color={'#2ecc71'} title="LOGIN"
                                                     onPress={() => this.onPress(credential)}/></View>
                        <TouchableOpacity onPress={() => navigation.navigate("RegisterScreen")}>
                            <View style={row}>
                                <Text>No Account yet?</Text>
                                <Text style={lin}> Register Here</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                }
            </View>
        )
    }
}
const lin = {
    color: '#0000FF'
}
const d = Dimensions.get('window');
const container1 = {
    width: 0.8 * d.width,
}
const row = {
    flexDirection: 'row',
    marginTop: 0.025 * d.height,
}
const row2 = {
    flexDirection: 'row',
    marginTop: 2,
}
const container = {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: "center",
    justifyContent: 'center',
}
const title = {
    marginBottom: 0.05 * d.height,
    fontSize: 50,
    fontFamily: 'Ubuntu',
    color: '#2ecc71',
    fontWeight: "bold",
    textAlign: 'center'
}
const button = {
    marginTop: 0.075 * d.height,
    width: 0.6 * d.width,
    marginLeft: 0.1 * d.width
}
export default connect(mapStateToProps)(LoginScreen)