import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed'

const Tweet=(props)=>{
        let {id} = props;
        return (
           <TwitterTweetEmbed tweetId={id} options={{theme: "light",conversation:"false", padding: "0px !important" }}></TwitterTweetEmbed>
        )
}

export default Tweet
