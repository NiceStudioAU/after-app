import { colours, fonts, spacing, typeSizes } from '@styles/index'
import { TouchableHighlight } from 'react-native'
import styled from 'styled-components'
import Icon from '@components/icon';

export const Arrow = styled(Icon)`
  font-size: ${typeSizes.h2};
  line-height: ${typeSizes.h2};
  color: ${(props: any) => props.iconColour ? props.iconColour : colours.olive.base};
`
export const Wrapper = styled(TouchableHighlight)`
  margin-left: ${spacing.md};
`

