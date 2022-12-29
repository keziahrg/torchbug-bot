import dotenv from 'dotenv'
import TwitterApi, { SendTweetV2Params } from 'twitter-api-v2'

dotenv.config()

const client = new TwitterApi({
    appKey: process.env.CONSUMER_KEY ?? '',
    appSecret: process.env.CONSUMER_SECRET ?? '',
    accessToken: process.env.ACCESS_TOKEN ?? '',
    accessSecret: process.env.ACCESS_TOKEN_SECRET ?? '',
})

export const postTweet = async (tweet: SendTweetV2Params) => {
    try {
        await client.v2.tweet(tweet)
    } catch (error) {
        console.log(
            `🚨 There was an error posting the tweet ${tweet.text}:`,
            error
        )
    }
}
