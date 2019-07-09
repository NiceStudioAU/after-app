import React, { Component } from 'react'
import { StatusWrapper, StyledText, StatusBar, Status } from './styles'

export interface IProps {
  currentValue: number
  target: number
  size: 'small' | 'large'
}

class ProgressBar extends Component<IProps> {

  render() {

    const { currentValue, target, size } = this.props

    const label = `${currentValue}/${target} complete`

    return (
      <StatusWrapper size={size}>
        <StyledText>{label}</StyledText>
        <StatusBar size={size}>
          <Status
            size={size}
            target={target}
            currentValue={currentValue}
          />
        </StatusBar>
      </StatusWrapper>
    )
  }
}

export default ProgressBar
