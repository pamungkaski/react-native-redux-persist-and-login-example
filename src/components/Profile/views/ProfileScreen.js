/**
 * Created by iampamungkas on 9/27/17.
 */
'use strict'
import React, { Component } from 'react'
import {connect} from 'react-redux'
import { View, Text, TextInput, Dimensions, Button, TouchableOpacity, BackHandler} from 'react-native'
import { createUser } from '../../../actions/user'
import { logout } from '../../../actions/login'
const mapStateToProps = (state) => {
    return {
        user: state.user.data,
        loginUser: state.loginUser
    }
}
class ProfileScreen extends Component{
    static navigationOptions = {
        header: null,
    }
    onPressB1 = (credential) => {
        const { navigation, user, dispatch } = this.props
        const data = user
        data[credential.username] = credential
        dispatch(createUser(data))
    }
    onPressB2 = () => {
        const { navigation,dispatch } = this.props
        dispatch(logout(false))
        navigation.navigate('HomeScreen')
    }
    render(){
        const { navigation, loginUser, user } = this.props
        const credential = {...user[loginUser.credential.username]}
        return(
            <View style={container}>
                <View style={container1}>
                    <Text style={title}>Profile</Text>
                    <View>
                        <Text>Username</Text>
                        <TextInput style={text} placeholderTextColor='black' placeholder={credential.username} editable={false} ref="username"/>
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput style={text} placeholderTextColor='black' placeholder={'YOUR_CURRENT_PASSWORD'} onChangeText={(text) => credential.password = text} ref="password" secureTextEntry={true}/>
                    </View>
                    <View>
                        <Text>Full name</Text>
                        <TextInput style={text} placeholderTextColor='black' placeholder={credential.name} onChangeText={(text) => credential.name = text} ref="name"/>
                    </View>
                    <View>
                        <Text>Email</Text>
                        <TextInput style={text} placeholderTextColor='black' placeholder={credential.email} onChangeText={(text) => credential.email = text} ref="email" keyboardType={'email-address'}/>
                    </View>
                    <View style={button}><Button color={'#2ecc71'} title="Save" onPress={()=>this.onPressB1(credential)}/></View>
                    <View style={button}><Button color={'#2ecc71'} title="Logout" onPress={()=>this.onPressB2()}/></View>
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
    fontFamily: 'Ubuntu',
    color: '#2ecc71',
    fontWeight: "bold",
    textAlign: 'center'
}
const button = {
    marginTop: 0.078 * d.height,
    width: 0.6 * d.width,
    marginLeft: 0.1 * d.width
}
const text = {
    fontSize: 18,
    color: '#000000',
}
export default connect(mapStateToProps)(ProfileScreen)