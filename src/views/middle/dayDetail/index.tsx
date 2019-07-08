import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import ScreenHeader from '@components/screenHeader'
import { DiaryInput,  PopupWrapper, PopupTop, PopupButton, PopupButtonWrapper, PopupBackground, StyledText, ModalWrapper, PopupButtonText, Separator, Wrapper } from './styles'
import { colours } from '@styles/index'
import DiaryService from '@services/diaryService'
import { IDiaryEntry } from '@models/diary'
import BlobLoader from '@components/blobLoader'
import MainButton from '@components/button'
import { Modal, TouchableHighlight } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { toggleDiaryModal, toggleEntryState } from '@state/actions/middle'


interface IProps {
	currentFocusedDay: any
	loading: boolean
	currentEntry: IDiaryEntry
	user: any
	showDiaryModal: boolean
	navigation: NavigationScreenProp<any, any>
	toggleDiaryModal: () => void
	toggleEntryState: (state) => void
}

interface IState {
	text: string
	placeholder: boolean
}

class DayDetail extends Component<IProps, IState> {
	state = ({
		text: '',
		placeholder: false,
	})

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.currentEntry !== this.props.currentEntry) {
			if (this.props.currentEntry === undefined) {
				this.setState({
					placeholder: true
				})
			} else {
				this.setState({
					text: this.props.currentEntry.diaryBody
				})
			}
		}
	}

	saveEntry = () => {
		const user = this.props.user.attributes.sub
		DiaryService.saveEntry(user, this.props.currentFocusedDay, this.state.text)
	}

	exitEntry = () => {
		if (this.props.showDiaryModal) {
			this.props.toggleDiaryModal()
		}
		this.props.navigation.navigate('Calendar')
		this.props.toggleEntryState(false)
	}

	saveAndExit = async () => {
		await this.saveEntry()
		this.exitEntry()
	}

	showModal = () => {
		if (this.state.text.length === 0) {
			this.exitEntry()
		} else {
			this.props.toggleDiaryModal()
		}
	}

	onTextEntry = (text) => {
		this.setState({ text })
		if (text.length > 0) {
			this.props.toggleEntryState(true)
		} else {
			this.props.toggleEntryState(false)
		}
	}

	render() {
		const {currentFocusedDay, loading, showDiaryModal} = this.props
		const momentObject = moment(currentFocusedDay, "YYYY-MM-DD")
		const formatedDate = momentObject.format('Do MMMM YYYY')

		if (loading) {
			return <BlobLoader />
		}

		return (
			<Wrapper>
				<Modal 
					animationType='fade'
					transparent={true}
					visible={showDiaryModal}
				>
					<PopupBackground />
					<ModalWrapper onPress={() => this.props.toggleDiaryModal()} activeOpacity={1} >
						<PopupWrapper>
							<PopupTop>
								<StyledText>Are you sure you would like to exit without saving?</StyledText>
							</PopupTop>
							<PopupButtonWrapper>
								<PopupButton underlayColor={colours.cream.light} onPress={this.exitEntry} secondary>
									<PopupButtonText secondary>Exit without saving</PopupButtonText>
								</PopupButton>
								<PopupButton underlayColor={colours.orange.light} onPress={this.saveAndExit}>
									<PopupButtonText>Save and exit</PopupButtonText>
								</PopupButton>
							</PopupButtonWrapper>
						</PopupWrapper>
					</ModalWrapper>
				</Modal>

				<ScreenHeader
					title={formatedDate}
					colour={colours.olive.base}
					align='left'
				/>
				<DiaryInput
					placeholder='Start your entry here...'
					placeholderTextColor={colours.olive.light}
					onChangeText={(text) => this.onTextEntry(text)}
					value={this.state.text}
					multiline={true}
				/>
					<MainButton buttonText='Save' onButtonPress={this.saveEntry} size='large' disabled={this.state.text.length === 0}/>
					<MainButton buttonText='Cancel' onButtonPress={this.showModal} size='small' disabled={false}/>
			</Wrapper>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	toggleDiaryModal: () => dispatch(toggleDiaryModal()),
	toggleEntryState: (state) => dispatch(toggleEntryState(state)),
})

const mapStateToProps = state => {
	return {
		currentFocusedDay: state.middleState.focusedDay,
		currentEntry: state.middleState.currentEntry,
		loading: state.httpState.loading,
		user: state.loginState.user,
		showDiaryModal: state.middleState.showDiaryModal,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(DayDetail)