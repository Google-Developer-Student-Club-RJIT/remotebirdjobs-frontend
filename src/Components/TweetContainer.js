import React, { useState, useEffect, useCallback } from "react";
import Tweet from "./Tweet";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import logo from "../logo.png";

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
        setTweets((prev) => [...prev, ...data]);
        setHasMore(data.length === 12);
      })
      .catch((err) => {
        console.log("Error => ", err);
        alert("Some error occured while getting tweets");
      });
  }, [form, page]);

  useEffect(() => {
    setTweets([]);
    setPage(1);
  }, [form]);

  useEffect(() => {
    loadTweets();
  }, [page, loadTweets]);

  return (
    <>
      <div className="text-center">
        <div className="row d-flex justify-content-center mx-0">
          <img
            className="col-auto my-3 mx-0"
            style={{ borderRadius: "50%", width: "5%" }}
            src={logo}
            alt="logo"
          />
          <h1 className="col-auto my-3 mx-0 px-0">
            <u>Tweets</u>
          </h1>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tweets.length}
        next={() => setPage((prev) => prev + 1)}
        hasMore={hasMore}
        endMessage={
          <h3 className="w-100 fw-normal text-secondary mt-5 text-center">
            {!!tweets.length
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
