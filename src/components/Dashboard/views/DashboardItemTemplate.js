/**
 * Created by iampamungkas on 9/26/17.
 */
import React, { PureComponent } from 'react'
import {View, Text, Dimensions} from 'react-native'
export default class DashboardItemTemplate extends PureComponent {
    render() {
        const { item } = this.props
        return (
            <View style={container}>
                <View style={container2}>
                    <Text style={nama}>{item.nama}</Text>
                    <Text style={alamat}>{item.alamat}</Text>
                </View>
            </View>
        )
    }
}
const d = Dimensions.get('window')
const container = {
    width: d.width,
    height: 70,
    alignItems: "center",
    justifyContent: 'center',
}
const container2 = {
    width: d.width*0.8,
    alignItems: "center",
    justifyContent: 'center',
}
const nama = {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
}

const alamat = {
    fontSize: 16,
    color: 'black',
    textAlign: 'center'
}