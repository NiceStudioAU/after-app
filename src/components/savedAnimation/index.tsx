import React, { Component } from 'react'
import { Wrapper } from './styles'
import LottieView from 'lottie-react-native'

export interface IProps {

}

class SavedAnimation extends Component<IProps> {

  render() {
    return (
      <Wrapper>
        <LottieView source={require('./saveAnimation.json')} autoPlay loop={false} />
      </Wrapper>
    )
  }
}

export default SavedAnimation
