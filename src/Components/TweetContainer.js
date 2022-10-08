import React, { useState, useEffect } from 'react'
import Tweet from "./Tweet"
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';

export default function TweetContainer() {

    const [tweet, setTweet] = useState([])
    const [loading, setLoading] = useState([true]);
    const [page, setPage] = useState(1)

    const loadTweets = async () => {
        const headers = { 'Content-Type': 'application/json' }
        let url = `https://remotebirdjobs-api.herokuapp.com/search/?search=reactjs&start_date=2022-10-01&end_date=2022-10-06&page=${page}&pagesize=12`
        fetch(url, { headers })
            .then(response => response.json())
            .then(data => setTweet(data))
        setTimeout(() => {
            setLoading(false)
        }, 9500);
    }
    useEffect(() => {
        loadTweets();
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        setPage(page+1)
        setLoading(true)
        const headers = { 'Content-Type': 'application/json' }
        let url = `https://remotebirdjobs-api.herokuapp.com/search/?search=reactjs&start_date=2022-10-01&end_date=2022-10-06&page=${page+1}&pagesize=12`
        fetch(url, { headers })
            .then(response => response.json())
            .then(data => setTweet(tweet.concat(data)))
        setTimeout(() => {
            setLoading(false)
        }, 10000);
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-center underline m-5">Tweets</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={tweet.length}
                next={fetchMoreData}
                hasMore={tweet.length <= 47}
                endMessage={
                    <h3 className='text-center'>
                      Yay!!! You have seen it all
                    </h3>
                  }
                loader={<Spinner />
                }>

                <div id='container' className='p-3 flex flex-wrap'>
                    {tweet.map((element) => {
                        return (
                            <div key={element.id} className='w-1/3 px-5 my-3 h-96 overflow-auto scrollbar'>
                                <Tweet id={element.id}></Tweet>
                            </div>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}
