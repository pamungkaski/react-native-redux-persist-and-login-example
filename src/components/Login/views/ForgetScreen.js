/**
 * Created by iampamungkas on 9/25/17.
 */
'use strict'
import React, { Component } from 'react'
import { View, Text, TextInput, Dimensions, Button, TouchableOpacity, BackHandler} from 'react-native'
export default class ForgetScreen extends Component{
    static navigationOptions = {
        header: null,
    }
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', ()=>this.props.navigation.navigate('LoginScreen'))
    }
    onPress = () => {
        const { navigation } = this.props
        navigation.navigate('LoginScreen')
    }
    render(){
        const { navigation } = this.props
        return(
            <View style={container}>
                <View style={container1}>
                    <Text style={title}>Forget Password</Text>
                    <View>
                        <Text>Email</Text>
                        <TextInput/>
                    </View>
                    <View style={button}><Button color={'#2ecc71'} title="SUBMIT" onPress={()=>this.onPress()}/></View>
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
}
const title = {
    marginTop: 0.175 * d.height,
    marginBottom: 0.05 * d.height,
    fontSize: 30,
    color: '#2ecc71',
    fontWeight: "bold",
    textAlign: 'center'
}
const button = {
    marginTop: 0.075 * d.height,
    width: 0.6 * d.width,
    marginLeft: 0.1 * d.width
}