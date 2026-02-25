import Voting from "../components/Voting";
const CommentCard = ({ comment }) => {
    return (
        <section className="comment-card">
            <p>
                <strong>{comment.author}:</strong>
            </p>
            <p>{comment.body}</p>
            <Voting type="comments" item={comment} />
        </section>
    );
};
export default CommentCard;
