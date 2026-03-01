import Interactions from "../components/Interactions";
import { formatDate, formatTime } from "../data/utils";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const CommentCard = ({ comment, commentList }) => {
    const date = formatDate(comment.created_at);
    const time = formatTime(comment.created_at);
    const username = useContext(UserContext).currentUser;

    return (
        <section className="comment-card">
            <p className="text-title">
                <strong>{comment.author}:</strong>
            </p>
            <p className="text-body">{comment.body}</p>
            <p className="date-time">
                Published: {date} {time}
            </p>
            <Interactions
                type="comments"
                comment={comment}
                commentList={commentList}
                isSelf={comment.author === username}
            />
        </section>
    );
};
export default CommentCard;
