import { useState } from "react";
import upvoteIcon from "../assets/upvote.png";
import downvoteIcon from "../assets/downvote.png";
import { changeVote } from "../data/api";

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

    return (
        <section className="interaction">
            <button
                className={`interaction-boxes ${voteChange === -1 ? "active-button" : ""}`}
                onClick={() => {
                    if (voteChange === 0) {
                        setVoteChange(-1);
                        //should use debounce here to prevent spam clicking
                        changeVote(type, id, -1);
                    } else if (voteChange === -1) {
                        setVoteChange(0);
                        changeVote(type, id, 1);
                    } else if (voteChange === 1) {
                        setVoteChange(-1);
                        changeVote(type, id, -2);
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
                className={`interaction-boxes ${voteChange === 1 ? "active-button" : ""}`}
                onClick={() => {
                    if (voteChange === 0) {
                        setVoteChange(1);
                        changeVote(type, id, 1);
                    } else if (voteChange === 1) {
                        setVoteChange(0);
                        changeVote(type, id, -1);
                    } else if (voteChange === -1) {
                        setVoteChange(1);
                        changeVote(type, id, 2);
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
