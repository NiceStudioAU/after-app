import React, { Component } from 'react'
import MainButton from '@components/mainButton'
import MainTab from '@components/mainTab'
import { Illustration, ImageContainer, ImageWrapper, ListFooter, ListWrapper, Separator } from './styles'
import ScreenHeader from '@components/screenHeader'
import { colours } from '@styles/index'
import ScreenWrapper from '@components/screenWrapper'

interface IProps {

}

const ButtonData = [
	{
		label: 'The facts',
		subLabel: "Let's lay down the foundations and get get all the facts straight.",
		progressTarget: 12,
		progressValue: 3,
		destination: 'TheFacts'
	},
	{
		label: 'Favourite things',
		subLabel: 'Everything from music to food, we want to know it all.',
		progressTarget: 12,
		progressValue: 6,
		destination: 'TheFacts'
	},
	{
		label: 'Education',
		subLabel: "Where did you go and what did you study? Have you done any short courses?",
		progressTarget: 12,
		progressValue: 12,
		destination: 'TheFacts'
	},
	{
		label: 'Family and Friends',
		subLabel: "Let's take the time to reflect on the awesome people in your life.",
		progressTarget: 12,
		progressValue: 9,
		destination: 'TheFacts'
	},
	{
		label: 'Career',
		subLabel: 'Across the Sahara Desert, through the Amazon rainforest. I want to hear it all.',
		progressTarget: 12,
		progressValue: 7,
		destination: 'TheFacts'
	},
	{
		label: 'Places',
		subLabel: 'Across the Sahara Desert, through the Amazon rainforest. I want to hear it all.',
		progressTarget: 12,
		progressValue: 2,
		destination: 'TheFacts'
	},
]

const illustration = require('../../../assets/start-placeholder.png')
class StartDashboard extends Component<IProps> {

	render() {
		return (
			<ScreenWrapper>
				<ScreenHeader
					title="The Start"
					subText="This section is all about capturing the essence of you.  The start of your journey and how that makes you unique - the true you."
					colour={colours.olive.base}
					align='left'
				/>
				<ImageContainer>
					<ImageWrapper>
						<Illustration source={illustration} />
					</ImageWrapper>
				</ImageContainer>
				<ListWrapper
					data={ButtonData}
					renderItem={({ item }) => (
						<MainTab
							label={item.label}
							subLabel={item.subLabel}
							key={item.index}
							progressTarget={item.progressTarget}
							progressValue={item.progressValue}
							destination={item.destination}
						/>
					)}
					ItemSeparatorComponent={() => <Separator />}
					keyExtractor={item => item.label}
					listFooterComponent={() => <ListFooter />}
				/>
			</ScreenWrapper>
		)
	}
}

export default StartDashboard
