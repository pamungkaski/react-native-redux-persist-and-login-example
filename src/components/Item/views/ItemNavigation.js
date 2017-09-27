/**
 * Created by iampamungkas on 9/26/17.
 */
'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorItem } from '../navigationConf'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.Item,
    }
}

class ItemNavigation extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render(){
        const { dispatch, navigationState } = this.props
        return (
            <NavigatorItem
                navigation={
                    addNavigationHelpers({
                        dispatch: dispatch,
                        state: navigationState,
                    })
                }
            />
        )
    }
}

export default connect(mapStateToProps)(ItemNavigation)
