import React, { useState, useEffect, useCallback } from "react";
import Tweet from "./Tweet";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import "./TweetContainer.css"

export default function TweetContainer(props) {
  let { form } = props;
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const loadTweets = useCallback(async () => {
    const headers = { "Content-Type": "application/json" };
    let url = `https://remotebirdjobs-api.herokuapp.com/search/?search=${form.topic}&start_date=${form.startDate}&end_date=${form.endDate}&page=${page}&wfh=${form.type}&pagesize=12`;
    fetch(url, { headers })
      .then((response) => response.json())
      .then((data) => {
        setTweets((prev) =>
          // removing duplicates
          [...prev, ...data].filter(
            (t, i, arr) => arr.findIndex((v) => v.id === t.id) === i
          )
        );
        setHasMore(data.length === 12);
      })
      .catch((err) => {
        console.log("Error => ", err);
      });
  }, [form, page]);

  useEffect(() => {
    setHasMore(true);
    setTweets([]);
    setPage(1);
  }, [form]);

  useEffect(() => {
    loadTweets();
  }, [page, loadTweets]);

  return (
    <>
      <div>
        <div className="tweet-box">
          <h1 className="title">Job Tweets</h1>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tweets.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        endMessage={
          <h3 className="w-100 fw-normal text-secondary mt-5 text-center">
            {tweets.length && !hasMore
              ? "Yay!!! You have seen it all"
              : "Your search did not return any results"}
          </h3>
        }
        loader={<Spinner />}
        id="container"
        className="d-flex flex-wrap align-items-center justify-content-space-between px-5 col"
      >
        {tweets.map((element) => {
          return (
            <div
              key={element.id}
              className="m-3 mx-auto p-0 overflow-auto scrollbar"
              style={{ width: "22%", height: "25vh", borderRadius: "12px" }}
            >
              <Tweet id={element.id} className="p-0"></Tweet>
            </div>
          );
        })}
      </InfiniteScroll>
    </>
  );
}
