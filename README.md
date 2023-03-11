# Torchbug Bot — A Twitter Bot That Sends Daily Tweets

This project is a Twitter bot that sends daily tweets to [@TESOnline](https://twitter.com/TESOnline) using [Netlify's scheduled functions](https://docs.netlify.com/functions/scheduled-functions/) and [Twitter's API](https://developer.twitter.com/en/docs/twitter-api).

## Usage

The bot is currently live and can be found at [@torchbug](https://twitter.com/torchbug) on Twitter.

## Setup

If you wish to set up the bot yourself, follow the steps below:

1. Clone the repository using the following command:

```
git clone https://github.com/keziahrg/torchbug-bot
```

2. Install the dependencies using the following command:

```
yarn install
```

3. Create a .env file in the root directory of the project and add the following keys:

```
CONSUMER_KEY=your_consumer_key
CONSUMER_SECRET=your_consumer_secret
ACCESS_TOKEN=your_access_token
ACCESS_TOKEN_SECRET=your_access_token_secret
```

You can obtain these keys by creating a Twitter developer account and creating a new app. For more information, refer to [Twitter's API documentation](https://developer.twitter.com/en/docs/twitter-api).

4. Update the `netlify/functions/schedulePostTweet.ts` file with your desired tweet text and scheduled time.

5. Deploy the project to Netlify
