import { deleteComment } from "../data/api";
import trash from "../assets/trash.png";

const DeleteComment = ({ comment, commentList }) => {
    const { comments, setComments } = commentList;
    return (
        <button
            className="interaction-boxes"
            onClick={() => {
                setComments(
                    comments.filter(
                        (item) => item.comment_id !== comment.comment_id,
                    ),
                );
                deleteComment(comment.comment_id);
            }}
        >
            <img
                className="interaction-icons"
                alt="delete button"
                src={trash}
            />
        </button>
    );
};

export default DeleteComment;
