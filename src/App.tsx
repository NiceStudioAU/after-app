import React, { Component } from 'react'
import RootStack from '@navigators/rootStack'
import { NavigationScreenProp } from 'react-navigation'
import { Font } from 'expo'
import Login from '@components/login'
import { connect } from 'react-redux'

import Amplify from '@aws-amplify/core'
import config from '../aws-exports'
import { CognitoUser } from '@aws-amplify/auth'
import { View, Text } from 'react-native'
Amplify.configure(config)

interface IProps {
  navigation: NavigationScreenProp<any, any>
  user: CognitoUser
}

class App extends Component<IProps> {

  state = {
    fontLoaded: false,
  }

  async componentDidMount() {
    await Font.loadAsync({
      'fontello': require('../assets/fonts/fontello.ttf'),
      'TT Commons Regular': require('../assets/fonts/TTCommons-Regular.ttf'),
    });
    this.setState({
      fontLoaded: true,
    })
  }

  render() {
    console.log('user', this.props.user)
    return (
      <>
      {/* <Text>HELLO WORK</Text> */}
        {/* {this.state.fontLoaded && ( */}
          <Login>
            <RootStack
              navigation={this.props.navigation}
              screenProps={this.props}
            />
          </Login>
        {/* )} */}
      </>
    )
  }
}
const mapStateToProps = state => {
  return {
    user: state.loginState.user,
  }
}
export default connect(
  mapStateToProps,
)(App)