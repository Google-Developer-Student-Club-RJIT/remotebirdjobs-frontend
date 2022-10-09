import React, { useState, useEffect } from 'react'
import Tweet from "./Tweet"
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component';
import logo from "../logo.png"

export default function TweetContainer(props) {
    let {form}=props;
    const [tweet, setTweet] = useState([])
    const [loading, setLoading] = useState([true]);
    const [page, setPage] = useState(1)

    const loadTweets = async () => {
        const headers = { 'Content-Type': 'application/json' }
        let url = `https://remotebirdjobs-api.herokuapp.com/search/?search=${form.topic}&start_date=${form.startDate}&end_date=${form.endDate}&page=${page}&pagesize=12`
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
            <div className='text-center'>
                <div className='row d-flex justify-content-center'>
                    <img className="col-auto my-3 mx-0" style = {{borderRadius:"50%",width:"5%"}} src={logo} alt='logo'/>
                    <h1 className="col-auto my-3 mx-0 px-0"><u>Tweets</u></h1>
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
