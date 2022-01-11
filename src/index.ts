import dotenv from 'dotenv'
import TwitterApi from 'twitter-api-v2'
var cron = require('node-cron');

dotenv.config()

const client = new TwitterApi({
    appKey: process.env.CONSUMER_KEY!,
    appSecret: process.env.CONSUMER_SECRET!,
    accessToken: process.env.ACCESS_TOKEN!,
    accessSecret: process.env.ACCESS_TOKEN_SECRET!,
})

const postTweet = async (day: number) => {
    const body = {
        text: `Day ${day} of tweeting @TESOnline until they gift me a torchbug pet 🥺 #TorchbugTuesday #ESO #ElderScrollsOnline`
    }

    await client.v2.tweet(body);
}

let day = 0;
cron.schedule('* 4 * * *', () => {
    day++
    postTweet(day)
  }, {
    timezone: "Pacific/Auckland"
  });
