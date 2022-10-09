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
            <div style={{textAlign: "center"}}>
                <div style = {{ display: "inline-table"}} >
                    <img style = {{ display: "table-cell", maxWidth: '38px', margin: '0px 12px -8px 0px'}} src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt='twitter_logo' />
                    <h1 style = {{ display: "table-cell"}}className="text-center m-3"><u>Tweets</u></h1>
                </div>
            </div>
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
                loader={<Spinner/>
                }>

                <div id='container' className='d-flex flex-wrap align-items-center p-3'>
                    {tweet.map((element) => {
                        return (
                            <div key={element.id} className='my-3 px-3 overflow-auto scrollbar' style={{width:"33%",height:"50vh"}}>
                                <Tweet id={element.id}></Tweet>
                            </div>
                        )
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}
