import { useState, useEffect } from "react";
import upvoteIcon from "../assets/upvote.png";
import downvoteIcon from "../assets/downvote.png";
import { upvote } from "../data/api";
import { downvote } from "../data/api";

const Voting = (props) => {
    const { type, item } = props;
    const { votes } = item;

    const [voteChange, setVoteChange] = useState(0);

    const id =
        type === "articles"
            ? item.article_id
            : type === "comments"
              ? item.comment_id
              : null;
    console.log(type, id);

    return (
        <section className="interaction">
            <button
                className="interaction-boxes"
                onClick={() => {
                    if (voteChange !== -1) {
                        setVoteChange(-1);
                        downvote(type, id, voteChange);
                        console.log(`down 1`);
                    } else {
                        setVoteChange(0);
                        upvote(type, id, voteChange);
                        console.log(`up 1`);
                    }
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
                        upvote(type, id, voteChange);
                        console.log(`up 1`);
                    } else {
                        setVoteChange(0);
                        downvote(type, id, voteChange);
                        console.log(`down 1`);
                    }
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
