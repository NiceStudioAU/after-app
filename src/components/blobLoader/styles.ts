import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { View } from 'react-native'

export const Wrapper = styled(View)`
  height: 100%;
  width: 100%;
  z-index: 100;
  background-color: ${colours.cream.light};
  justify-content: center;
  align-items: center;
`
export const AnimationWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  height: 200;
  width: 200;
`