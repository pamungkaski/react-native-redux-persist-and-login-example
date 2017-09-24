/**
 * Created by iampamungkas on 9/24/17.
 */
'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorHome } from '../navigationConf'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.Home,
    }
}

class HomeNavigation extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render(){
        const { dispatch, navigationState } = this.props
        return (
            <NavigatorHome
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

export default connect(mapStateToProps)(HomeNavigation)
