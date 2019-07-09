import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import ScreenHeader from '@components/screenHeader'
import { DiaryInput,  PopupWrapper, PopupTop, PopupButton, PopupButtonWrapper, PopupBackground, StyledText, ModalWrapper, PopupButtonText, Separator, Wrapper,SaveWrapper } from './styles'
import { colours, fonts, typeSizes, spacing } from '@styles/index'
import DiaryService from '@services/diaryService'
import { IDiaryEntry } from '@models/index'
import BlobLoader from '@components/blobLoader'
import MainButton from '@components/button'
import { Modal, TouchableHighlight } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { toggleDiaryModal, toggleEntryState, fetchDiaryEntries, saveDiaryEntry } from '@state/actions/middle'
import SavedAnimation from '@components/savedAnimation';


interface IProps {
	currentFocusedDay: any
	loading: boolean
	currentEntry: IDiaryEntry
	user: any
	showDiaryModal: boolean
	source: string
	navigation: NavigationScreenProp<any, any>
	toggleDiaryModal: () => void
	toggleEntryState: (state: boolean, saved: boolean) => void
	fetchDiaryEntries: () => void
	saveDiaryEntry: (text: string) => void
}

interface IState {
	text: string
	hasInitialContent: boolean
}

class DayDetail extends Component<IProps, IState> {
	state = ({
		text: '',
		hasInitialContent: false,
	})

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.currentEntry !== this.props.currentEntry) {
			if (this.props.currentEntry === undefined) {
				this.setState({
					hasInitialContent: false
				})
			} else {
				if (this.props.currentEntry.diaryBody === '...') {
					this.setState({
						hasInitialContent: false
					})
				} else {
					this.setState({
						text: this.props.currentEntry.diaryBody,
						hasInitialContent: true
					})
				}
			}
		}
	}

	saveEntry = () => {
		if (this.state.text.length === 0) {
			this.props.saveDiaryEntry('...')
		} else {
			this.props.saveDiaryEntry(this.state.text)
		}
		this.props.toggleEntryState(false, true)
	}

	exitEntry = () => {
		if (this.props.showDiaryModal) {
			this.props.toggleDiaryModal()
		}
		this.props.fetchDiaryEntries()
		this.props.toggleEntryState(false, true)
		this.props.navigation.navigate('Calendar')
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
			this.props.toggleEntryState(true, false)
		} else {
			this.props.toggleEntryState(false, false)
			
		}
	}

	render() {
		const {currentFocusedDay, loading, showDiaryModal, source} = this.props
		const momentObject = moment(currentFocusedDay, "YYYY-MM-DD")
		const formatedDate = momentObject.format('Do MMMM YYYY')

		if (loading && source === 'diaryEntry') {
			return <BlobLoader />
		}

		return (
			<Wrapper>
				<Modal
					animationType='fade'
					transparent={true}
					visible={loading && source === 'saveEntry'}
				>
					<SaveWrapper>
						<SavedAnimation />
					</SaveWrapper>
				</Modal>
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
					selectionColor={colours.orange.base}
				/>
					<MainButton buttonText='Save' onButtonPress={this.saveEntry} size='large' disabled={this.state.text.length === 0 && !this.state.hasInitialContent}/>
					<MainButton buttonText='Cancel' onButtonPress={this.showModal} size='small' disabled={false}/>
			</Wrapper>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	toggleDiaryModal: () => dispatch(toggleDiaryModal()),
	toggleEntryState: (state, saved) => dispatch(toggleEntryState(state, saved)),
	fetchDiaryEntries: () => dispatch(fetchDiaryEntries()),
	saveDiaryEntry: (text) => dispatch(saveDiaryEntry(text))
})

const mapStateToProps = state => {
	return {
		currentFocusedDay: state.middleState.focusedDay,
		currentEntry: state.middleState.currentEntry,
		loading: state.httpState.loading,
		source: state.httpState.source,
		user: state.loginState.user,
		showDiaryModal: state.middleState.showDiaryModal,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(DayDetail)