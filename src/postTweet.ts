import { SendTweetV2Params } from 'twitter-api-v2'
import { client } from './client'

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
