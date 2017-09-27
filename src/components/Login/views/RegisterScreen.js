/**
 * Created by iampamungkas on 9/25/17.
 */
'use strict'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, TextInput, Dimensions, Button, TouchableOpacity, BackHandler} from 'react-native'
import { createUser } from '../../../actions/user'
const mapStateToProps = (state) => {
    return {
        user: state.user.data
    }
}
class RegisterScreen extends Component{
    static navigationOptions = {
        header: null,
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', ()=>this.props.navigation.navigate('LoginScreen'))
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', ()=>this.props.navigation.navigate('LoginScreen'))
    }
    onPress = (credential) => {
        const { navigation, user, dispatch } = this.props
        const data = user
        data[credential.username] = credential
        dispatch(createUser(data))
        navigation.navigate('LoginScreen')
    }
    render(){
        const { navigation } = this.props
        const credential = {
            username:'',
            password:'',
            name:'',
            email:''
        }
        return(
            <View style={container}>
                <View style={container1}>
                    <Text style={title}>REGISTRATION</Text>
                    <View>
                        <Text>Username</Text>
                        <TextInput onChangeText={(text) => credential.username = text} returnKeyType={'next'} onSubmitEditing={()=> this.refs.password.focus()}/>
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput onChangeText={(text) => credential.password = text} ref="password" returnKeyType={'next'} secureTextEntry={true} onSubmitEditing={()=> this.refs.name.focus()}/>
                    </View>
                    <View>
                        <Text>Full name</Text>
                        <TextInput onChangeText={(text) => credential.name = text} ref="name" returnKeyType={'next'} onSubmitEditing={()=> this.refs.email.focus()}/>
                    </View>
                    <View>
                        <Text>Email</Text>
                        <TextInput onChangeText={(text) => credential.email = text} ref="email" keyboardType={'email-address'}/>
                    </View>
                    <View style={button}><Button color={'#2ecc71'} title="REGISTER" onPress={()=>this.onPress(credential)}/></View>
                </View>
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
    fontSize: 30,
    color: '#2ecc71',
    fontWeight: "bold",
    textAlign: 'center'
}
const button = {
    marginTop: 0.078 * d.height,
    width: 0.6 * d.width,
    marginLeft: 0.1 * d.width
}
export default connect(mapStateToProps)(RegisterScreen)