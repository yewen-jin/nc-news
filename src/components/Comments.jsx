import commentsIcon from "../assets/comments.svg";
import { useState, useEffect } from "react";

const Comments = ({ article }) => {
    const [isCommentOn, setIsCommentOn] = useState(false);

    return (
        <section className="interaction">
            <button
                className="interaction-boxes"
                onClick={() => {
                    setIsCommentOn(!isCommentOn);
                }}
            >
                <img
                    className="interaction-icons"
                    alt="comments icon"
                    src={commentsIcon}
                />
            </button>
            <div className="interaction-boxes">
                <p>{article.comment_count}</p>
            </div>
        </section>
    );
};

export default Comments;
