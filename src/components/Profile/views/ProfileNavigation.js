/**
 * Created by iampamungkas on 9/27/17.
 */
'use strict'

// React
import React from 'react'

// Navigation
import { addNavigationHelpers } from 'react-navigation'
import { NavigatorProfile } from '../navigationConf'
//Redux
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        navigationState: state.Profile,
    }
}

class ProfileNavigation extends React.Component {
    static navigationOptions = {
        header: null,
    }
    render(){
        const { dispatch, navigationState } = this.props
        return (
            <NavigatorProfile
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

export default connect(mapStateToProps)(ProfileNavigation)
