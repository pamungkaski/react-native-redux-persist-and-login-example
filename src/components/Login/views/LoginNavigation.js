/**
 * Created by iampamungkas on 9/25/17.
 */
'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorLogin } from '../navigationConf'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.Login,
    }
}

class LoginNavigation extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render(){
        const { dispatch, navigationState } = this.props
        return (
            <NavigatorLogin
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

export default connect(mapStateToProps)(LoginNavigation)
