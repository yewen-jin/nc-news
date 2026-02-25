import Voting from "../components/Voting";
import { formatDate, formatTime } from "../data/utils";
const CommentCard = ({ comment }) => {
    const date = formatDate(comment.created_at);
    const time = formatTime(comment.created_at);
    return (
        <section className="comment-card">
            <p className="text-title">
                <strong>{comment.author}:</strong>
            </p>
            <p className="text-body">{comment.body}</p>
            <p className="date-time">
                Published: {date} {time}
            </p>
            <Voting type="comments" item={comment} />
        </section>
    );
};
export default CommentCard;
