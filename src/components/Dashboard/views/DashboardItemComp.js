/**
 * Created by iampamungkas on 9/26/17.
 */
import React, { PureComponent } from 'react'
import {View} from 'react-native'
import DashboardItemTemplate from './DashboardItemTemplate'
export default class DashboardItemComp extends PureComponent {
    render() {
        const { item } = this.props
        const list = item === {} ? <View></View> : Object.values(item).map(function (dotes,index) {
            return (
                <DashboardItemTemplate item={dotes} key={index}/>
            )
        })
        return (
            <View>{list}</View>
        )
    }
}