import { Handler, schedule } from '@netlify/functions'

const url = process.env.NETLIFY_BUILD_HOOK ?? ''

const netlifyBuildHandler: Handler = async () => {
    try {
        const response = await fetch(url, { method: 'POST' })
        return { statusCode: response.status }
    } catch (error) {
        console.log(
            '🚨 There was an error triggering the Netlify build:',
            error
        )
        return { statusCode: 500 }
    }
}

export const handler = schedule('@daily', netlifyBuildHandler)
