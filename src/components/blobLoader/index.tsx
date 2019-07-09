import React, { Component } from 'react'
import { Wrapper, AnimationWrapper } from './styles'
import LottieView from 'lottie-react-native'

export interface IProps {

}

class BlobLoader extends Component<IProps> {

  render() {
    return (
      <Wrapper>
        <AnimationWrapper>
          <LottieView source={require('./blob-loader.json')} autoPlay loop />
        </AnimationWrapper>
      </Wrapper>
    )
  }
}

export default BlobLoader
