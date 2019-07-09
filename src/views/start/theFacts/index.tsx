import React, { Component } from 'react'
import ScreenHeader from '@components/screenHeader'
import { colours } from '@styles/index'
import ScreenWrapper from '@components/screenWrapper'
import ProgressBar from '@components/progressBar'
import LoginInput from '@components/login/input'
import { InputSection } from './styles'
import MainInput from '@components/mainInput';
import { KeyboardAvoidingView } from 'react-native';

interface IProps {

}

interface IState {
	focusedInput: string
	birthName: string
	nickName: string
	height: string
	eyeColour: string
	hairColour: string
}

class TheFacts extends Component<IProps, IState> {

	state = {
		focusedInput: null,
		birthName: '',
		nickName: '',
		height: '',
		eyeColour: '',
		hairColour: '',
	}

	render() {
		console.log('nickName', this.state.nickName)
		return (
				
			<ScreenWrapper>
				<KeyboardAvoidingView behavior='position'>
					<ScreenHeader
						title="The Facts"
						subText="This section is all about capturing the essence of you.  The start of your journey and how that makes you unique - the true you."
						colour={colours.olive.base}
						align='left'
					/>
					<ProgressBar
						currentValue={6}
						target={12}
						size='large'
					/>
						
					<InputSection>
						<MainInput 
							hasContent={this.state.focusedInput === 'birthName' || this.state.birthName.length > 0}
							inFocus={this.state.focusedInput === 'birthName'}
							inputLabel='Birth Name'
							inputValue={this.state.birthName}
							keyboardType='default'
							autoCapitalize='words'
							onTextChange={(text) => this.setState({ birthName: text })}
							onFocus={() => this.setState({ focusedInput: 'birthName' })}
							onBlur={() => this.setState({ focusedInput: null })}
						/>
						<MainInput 
							hasContent={this.state.focusedInput === 'nickName' || this.state.nickName.length > 0}
							inFocus={this.state.focusedInput === 'nickName'}
							inputLabel='Nick Name'
							inputValue={this.state.nickName}
							keyboardType='default'
							autoCapitalize='words'
							onTextChange={(text) => this.setState({ nickName: text })}
							onFocus={() => this.setState({ focusedInput: 'nickName' })}
							onBlur={() => this.setState({ focusedInput: null })}
						/>
						<MainInput 
							hasContent={this.state.focusedInput === 'height' || this.state.height.length > 0}
							inFocus={this.state.focusedInput === 'height'}
							inputLabel='Height (cm)'
							inputValue={this.state.height}
							keyboardType='decimal-pad'
							autoCapitalize='words'
							onTextChange={(text) => this.setState({ height: text })}
							onFocus={() => this.setState({ focusedInput: 'height' })}
							onBlur={() => this.setState({ focusedInput: null })}
						/>
						<MainInput 
							hasContent={this.state.focusedInput === 'eyeColour' || this.state.eyeColour.length > 0}
							inFocus={this.state.focusedInput === 'eyeColour'}
							inputLabel='Eye Colour'
							inputValue={this.state.eyeColour}
							keyboardType='decimal-pad'
							autoCapitalize='words'
							onTextChange={(text) => this.setState({ eyeColour: text })}
							onFocus={() => this.setState({ focusedInput: 'eyeColour' })}
							onBlur={() => this.setState({ focusedInput: null })}
						/>
						<MainInput 
							hasContent={this.state.focusedInput === 'hairColour' || this.state.hairColour.length > 0}
							inFocus={this.state.focusedInput === 'hairColour'}
							inputLabel='Hair Colour'
							inputValue={this.state.hairColour}
							keyboardType='decimal-pad'
							autoCapitalize='words'
							onTextChange={(text) => this.setState({ hairColour: text })}
							onFocus={() => this.setState({ focusedInput: 'hairColour' })}
							onBlur={() => this.setState({ focusedInput: null })}
						/>
					</InputSection>
				</KeyboardAvoidingView>
			</ScreenWrapper>
		)
	}
}

export default TheFacts
