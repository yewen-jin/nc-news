import { deleteComment } from "../data/api";

const DeleteComment = ({ comment }) => {
    return (
        <button
            onClick={() => {
                deleteComment(comment.comment_id);
            }}
        >
            Delete
        </button>
    );
};

export default DeleteComment;
