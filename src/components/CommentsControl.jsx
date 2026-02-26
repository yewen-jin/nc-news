import commentsIcon from "../assets/comments.svg";
// import { useState, useEffect } from "react";

const CommentsControl = ({ article, commentState }) => {
    const { isAddCommentOn, setIsAddCommentOn } = commentState;
    return (
        <>
            <section className="interaction">
                <button
                    className="interaction-boxes"
                    onClick={() => {
                        setIsAddCommentOn(!isAddCommentOn);
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
        </>
    );
};

export default CommentsControl;
