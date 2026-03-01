import commentsIcon from "../assets/comments.svg";

const CommentsControl = ({ article, commentState }) => {
    const { isAddCommentOn, setIsAddCommentOn } = commentState;
    return (
        <>
            <section className="interaction">
                <button
                    className={`interaction-boxes ${isAddCommentOn ? "active-button" : ""}`}
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
