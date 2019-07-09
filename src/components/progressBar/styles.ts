import { colours, fonts, spacing, typeSizes } from '@styles/index'
import styled from 'styled-components'
import { Text, View } from 'react-native'

export const StatusWrapper = styled(View)`
  margin-top: ${(props: any) => props.size === 'small' ? spacing.xs : spacing.sm};
  margin-bottom: ${(props: any) => props.size === 'small' ? spacing.xs : spacing.sm};
`
export const StatusBar = styled(View)`
  width: 100%;
  height: ${(props: any) => props.size === 'small' ? spacing.xs : spacing.sm};
  border-radius: ${(props: any) => props.size === 'small' ? spacing.xs : spacing.sm};
  background-color: ${colours.white.base};
`
export const Status = styled(View)`
  height: ${(props: any) => props.size === 'small' ? spacing.xs : spacing.sm};
  background-color: ${colours.blue.base};
  border-radius: ${(props: any) => props.size === 'small' ? spacing.xs : spacing.sm};
  position: absolute;
  left: 0;
  top: 0;
  min-width: ${(props: any) => props.size === 'small' ? spacing.xs : spacing.sm};
  width: ${(props: any) => `${(props.currentValue / props.target) * 100}%`};
`
export const StyledText = styled(Text)`
  font-family: ${fonts.book};
  font-size: ${typeSizes.large};
  color: ${colours.olive.base};
  text-align: right;
  margin-bottom: ${spacing.xs};
`
