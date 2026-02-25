import { useState, useEffect } from "react";
import upvoteIcon from "../assets/upvote.png";
import downvoteIcon from "../assets/downvote.png";
import { upvote } from "../data/api";
import { downvote } from "../data/api";

const Voting = ({ article }) => {
    const { article_id, votes } = article;
    const [voteChange, setVoteChange] = useState(0);
    // console.log(votes, article_id);

    //you should be able to upvote or downvote only once
    useEffect(() => {}, []);
    return (
        <section className="interaction">
            <button
                className="interaction-boxes"
                onClick={() => {
                    if (voteChange !== -1) {
                        setVoteChange(-1);
                    } else {
                        setVoteChange(0);
                    }
                    downvote("articles", article_id);
                }}
            >
                <img
                    className="interaction-icons"
                    alt="downvote icon"
                    src={downvoteIcon}
                />
            </button>
            <div className="interaction-boxes">
                <p> {votes + voteChange}</p>
            </div>
            <button
                className="interaction-boxes"
                onClick={() => {
                    if (voteChange !== 1) {
                        setVoteChange(1);
                    } else {
                        setVoteChange(0);
                    }
                    upvote("articles", article_id);
                }}
            >
                <img
                    className="interaction-icons"
                    alt="upvote icon"
                    src={upvoteIcon}
                />
            </button>
        </section>
    );
};

export default Voting;
