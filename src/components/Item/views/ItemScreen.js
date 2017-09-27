/**
 * Created by iampamungkas on 9/26/17.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, TextInput, Dimensions, Button, TouchableOpacity, BackHandler, ActivityIndicator} from 'react-native'
import { createData } from '../../../actions/database'
const mapStateToProps = (state) => {
    return {
        data: state.database.data
    }
}
class ItemScreen extends Component{
    static navigationOptions = {
        header: null,
    }
    onPress = (item) => {
        const { navigation, dispatch, data } = this.props
        const dummy = data
        dummy[item.nama] = item
        dispatch(createData(dummy))
        navigation.navigate('DashboardNavigation')
    }
    render(){
        const { navigation } = this.props
        const item = {
            nama:'',
            alamat:''
        }
        return(
            <View style={container}>
                <View style={container1}>
                    <Text style={title}>Create Travel Data</Text>
                    <View>
                        <Text>Name</Text>
                        <TextInput onChangeText={(text) => item.nama = text} onSubmitEditing={() => this.refs.address.focus()} returnKeyType={'next'}/>
                    </View>
                    <View>
                        <Text>Address</Text>
                        <TextInput ref="address" onChangeText={(text) => item.alamat = text} onSubmitEditing={() => this.onPress(item)}/>
                    </View>
                    <View style={button}><Button color={'#2ecc71'} title="Add Item" onPress={() => this.onPress(item)}/></View>
                </View>
            </View>
        )
    }
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
export default connect(mapStateToProps)(ItemScreen)