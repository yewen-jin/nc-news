import { useState, useEffect } from "react";
import upvoteIcon from "../assets/upvote.png";
import downvoteIcon from "../assets/downvote.png";
import { upvote } from "../data/api";
import { downvote } from "../data/api";

const Voting = ({ article }) => {
    const { article_id, votes } = article;
    // console.log(votes, article_id);

    //you should be able to upvote or downvote only once
    useEffect(() => {}, []);
    return (
        <>
            <button
                className="vote-boxes"
                onClick={() => {
                    downvote("articles", article_id);
                }}
            >
                <img
                    className="vote-icons"
                    alt="downvote icon"
                    src={downvoteIcon}
                />
            </button>
            <div className="vote-boxes">
                <p> {votes}</p>
            </div>
            <button
                className="vote-boxes"
                onClick={() => {
                    upvote("articles", article_id);
                }}
            >
                <img
                    className="vote-icons"
                    alt="upvote icon"
                    src={upvoteIcon}
                />
            </button>
        </>
    );
};

export default Voting;
