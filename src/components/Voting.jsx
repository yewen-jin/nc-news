import { useState, useEffect } from "react";
import upvoteIcon from "../assets/upvote.png";
import downvoteIcon from "../assets/downvote.png";
import { upvote } from "../data/api";
import { downvote } from "../data/api";

const Voting = ({ article }) => {
    const { article_id, votes } = article;
    // console.log(votes, article_id);

    useEffect(() => {}, []);
    return (
        <>
            <button
                onClick={() => {
                    downvote("articles", article_id);
                }}
            >
                <img alt="downvote icon" src={downvoteIcon} />
            </button>
            <button
                onClick={() => {
                    upvote("articles", article_id);
                }}
            >
                <img alt="upvote icon" src={upvoteIcon} />
            </button>
            <p>votes: {votes}</p>
        </>
    );
};

export default Voting;
