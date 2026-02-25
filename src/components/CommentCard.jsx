const CommentCard = ({ comment }) => {
    return (
        <section className="comment-card">
            <p>
                <strong>{comment.author}:</strong>
            </p>
            <p>{comment.body}</p>
            {/* <Voting></Voting>*/}
        </section>
    );
};
export default CommentCard;
