import React, { PureComponent } from 'react'
import { InputWrapper, InputLabel, InputField, ErrorMessage } from './styles'

interface IProps {
  inFocus: boolean
  hasContent: boolean
  keyboardType: string
  autoCapitalize: string
  inputValue: string
  inputType?: string
  inputLabel: string
  onTextChange: (text: string) => void
  onFocus: () => void
  onBlur: () => void
}

class MainInput extends PureComponent<IProps> {

  render() {
    const {
      inFocus,
      hasContent,
      keyboardType,
      autoCapitalize,
      inputValue,
      inputLabel,
      onTextChange,
      onBlur,
      onFocus,
    } = this.props

    return (
      <InputWrapper>
        <InputLabel
          inFocus={inFocus}
          hasContent={hasContent}
        >
          {inputLabel}
        </InputLabel>
        <InputField
          inFocus={inFocus}
          hasContent={hasContent}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          value={inputValue}
          onChangeText={onTextChange}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </InputWrapper>
    )
  }
}

export default MainInput
