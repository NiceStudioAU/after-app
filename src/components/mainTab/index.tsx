import React, { Component } from 'react'
import { Wrapper, Title, SubLabel, Header, SideArrow } from './styles'
import { colours } from '@styles/index'
import ProgressBar from '@components/progressBar'
import { withNavigation, NavigationScreenProp } from 'react-navigation';

export interface IProps {
  label: string
  subLabel: string
  progressValue: number
  progressTarget: number
  destination: string
  navigation: NavigationScreenProp<any, any>
}

class MainTab extends Component<IProps> {

  onPress = () => {
    this.props.navigation.navigate(this.props.destination)
  }

  render() {

    const { label, subLabel, progressValue, progressTarget } = this.props

    return (
      <Wrapper underlayColor={colours.cream.light} onPress={this.onPress}>
        <>
          <Header>
            <Title>{label}</Title>
            <SideArrow name='right' />
          </Header>
          <SubLabel>{subLabel}</SubLabel>
          <ProgressBar currentValue={progressValue} target={progressTarget} size='small' />
        </>
      </Wrapper>
    )
  }
}

export default withNavigation(MainTab)
