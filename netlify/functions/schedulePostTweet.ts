import { Handler, schedule } from '@netlify/functions'
import moment, { Moment } from 'moment'
import { postTweet } from '../../src'

const postTweetHandler: Handler = async () => {
    const startDate: Moment = moment('14-01-2022', 'DD-MM-YYYY')
    const currentDate: Moment = moment().startOf('day')
    const noOfDaysSinceStartDate: number = currentDate.diff(startDate, 'days')

    try {
        await postTweet({
            text: `Day ${noOfDaysSinceStartDate} of tweeting @TESOnline asking them to pls gift me a torchbug pet 🥺 #TorchbugTuesday #ESO #ElderScrollsOnline`,
        })

        return { statusCode: 200 }
    } catch (error) {
        console.log('🚨 There was an error in postTweetHandler:', error)
        return { statusCode: 500 }
    }
}

export const handler = schedule('@daily', postTweetHandler)
