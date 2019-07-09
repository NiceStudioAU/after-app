import { API, graphqlOperation } from 'aws-amplify'
import { createTheFacts, deleteTheFacts, updateTheFacts } from '@graphql/mutations'
import { listTheFactss } from '@graphql/queries'
import { ITheFacts } from '@models/index'

class TheFactsService {
    async getAllFacts(): Promise<ITheFacts[]> {
		const entries: any = await API.graphql(graphqlOperation(listTheFactss))
		return entries.data.listTheFactss.items.map(entry => {
			return {
				id: entry.id,
				userID: entry.userID,
				birthName: entry.birthName,
				nickName: entry.nickName,
				height: entry.height,
				eyeColour: entry.eyeColour,
				hairColour: entry.hairColour
			}
		})
	}

	async saveFacts(userID: string, birthName: string, nickName: string, height: string, eyeColour: string, hairColour: string ) {
		const entries = await this.getAllFacts()
		const currentEntry = entries.filter(entry => entry.userID === userID)[0]
		if (currentEntry) {
			API.graphql(graphqlOperation(updateTheFacts, {
				input: {
					id: currentEntry.id,
					userID: currentEntry.userID,
					birthName: birthName,
					nickName: nickName,
					height: height,
					eyeColour: eyeColour,
					hairColour: hairColour
				}
			}))
		} else {
			API.graphql(graphqlOperation(createTheFacts, {
				input: {
					userID: userID,
					birthName: birthName,
					nickName: nickName,
					height: height,
					eyeColour: eyeColour,
					hairColour: hairColour
				}
			}))
		}
    }
    
    async deleteFacts(userID: string, selectedDay: string) {
        const entries = await this.getAllFacts()
        const currentEntry = entries.filter(entry => entry.userID === userID)[0]
		if (currentEntry) {
			API.graphql(graphqlOperation(deleteTheFacts, {
				input: {
					id: currentEntry.id,
					userID: currentEntry.userID,
					birthName: currentEntry.birthName,
					nickName: currentEntry.nickName,
					height: currentEntry.height,
					eyeColour: currentEntry.eyeColour,
					hairColour: currentEntry.hairColour
				}
			}))
		}
    }
}

export default new TheFactsService()