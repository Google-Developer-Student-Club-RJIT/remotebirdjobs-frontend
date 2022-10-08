import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const Tweet=(props)=>{
        let {id} = props;
        return (
           <TwitterTweetEmbed tweetId={id} options={{theme: "dark" }}></TwitterTweetEmbed>
        )
}

export default Tweet
