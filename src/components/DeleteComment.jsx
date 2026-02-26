import { deleteComment } from "../data/api";

const DeleteComment = ({ comment, commentList }) => {
    const { comments, setComments } = commentList;
    return (
        <button
            onClick={() => {
                // a new array of comments, with the deleted one removed
                setComments(
                    comments.filter(
                        (item) => item.comment_id !== comment.comment_id,
                    ),
                );
                deleteComment(comment.comment_id);
            }}
        >
            Delete
        </button>
    );
};

export default DeleteComment;
