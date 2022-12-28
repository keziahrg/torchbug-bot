import moment, { Moment } from 'moment'
import { postTweet } from './postTweet'

const startDate: Moment = moment('14-01-2022', 'DD-MM-YYYY')
const currentDate: Moment = moment().startOf('day')
const noOfDaysSinceStartDate: number = currentDate.diff(startDate, 'days')

postTweet({
    text: `Day ${noOfDaysSinceStartDate} of tweeting @TESOnline asking them to pls gift me a torchbug pet 🥺 #TorchbugTuesday #ESO #ElderScrollsOnline`,
})
