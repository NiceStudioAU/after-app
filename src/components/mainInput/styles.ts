import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { Text, View, TextInput } from 'react-native'
import styled from 'styled-components'

export const ErrorMessage = styled(Text)`
  color: ${colours.red.base};
  font-size: ${typeSizes.large};
  position: absolute;
  top: 100%;
  padding-top: ${spacing.xxs};
`
export const InputLabel = styled(Text)`
  font-family: ${fonts.book};
  color: ${(props: any) => props.inFocus ? colours.blue.base : colours.olive.base};
  font-size: ${(props: any) => props.inFocus || props.hasContent ? typeSizes.large : typeSizes.h4};
  position: absolute;
  bottom: ${(props: any) => props.inFocus || props.hasContent ? 60 : spacing.sm};
`
export const InputField = styled(TextInput)`
  height: 60;
  width: 100%;
  border-bottom-width: 2;
  border-bottom-color: ${(props: any) => props.inFocus ? colours.blue.base : colours.olive.base};
  font-size: ${typeSizes.h4};
  color: ${colours.olive.base};
  font-family: ${fonts.book};
`
export const InputWrapper = styled(View)`
  width: 100%;
  position: relative;
  margin-top: ${spacing.xl};
`