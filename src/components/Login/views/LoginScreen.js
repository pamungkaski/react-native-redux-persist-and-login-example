/**
 * Created by iampamungkas on 9/25/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput, Dimensions, Button, TouchableOpacity} from 'react-native'
export default class LoginScreen extends Component{
    static navigationOptions = {
        header: null,
    }
    onPress = () => {
        const { navigation } = this.props
    }
    render(){
        const { navigation } = this.props
        return(
            <View style={container}>
                <View style={container1}>
                    <Text style={title}>LOGIN</Text>
                    <View>
                        <Text>Username</Text>
                        <TextInput/>
                    </View>
                    <View>
                        <Text>Password</Text>
                        <TextInput onSubmitEditing={()=>this.onPress()} secureTextEntry={true}/>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate("ForgetScreen")}>
                        <View style={row2}>
                            <Text>Forget you Password </Text>
                            <Text style={lin}>?</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={button}><Button color={'#2ecc71'} title="LOGIN" onPress={()=>this.onPress()}/></View>
                    <TouchableOpacity onPress={()=> navigation.navigate("RegisterScreen")}>
                        <View style={row}>
                            <Text>No Account yet?</Text>
                            <Text style={lin}> Register Here</Text>
                        </View>
                    </TouchableOpacity>
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