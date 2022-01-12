import dotenv from 'dotenv'
import moment from 'moment'
import TwitterApi from 'twitter-api-v2'

dotenv.config()

const client = new TwitterApi({
    appKey: process.env.CONSUMER_KEY!,
    appSecret: process.env.CONSUMER_SECRET!,
    accessToken: process.env.ACCESS_TOKEN!,
    accessSecret: process.env.ACCESS_TOKEN_SECRET!,
})

const postTweet = async (day: number) => {
    const body = {
        text: `Day ${day} of tweeting @TESOnline asking them to pls gift me a torchbug pet 🥺 #TorchbugTuesday #ESO #ElderScrollsOnline`,
    }

    try {
        await client.v2.tweet(body)
    } catch (err) {
        console.log('error:', err?.data?.detail)
    }
}

const startDate: any = moment('12-01-2022', 'DD-MM-YYYY')
let currentDate: any = moment().startOf('day')
let noOfDaysSinceStartDate: number = startDate.diff(currentDate, 'days') + 1

postTweet(noOfDaysSinceStartDate)
