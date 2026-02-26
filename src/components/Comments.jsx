import { getCommentsByArticle } from "../data/api";
import CommentCard from "./CommentCard";
import useLoadData from "../hooks/useLoadData";

const Comments = ({ article, commentList }) => {
    const { article_id } = article;
    const { comments, setComments } = commentList;

    const { data, error, isLoading } = useLoadData(
        getCommentsByArticle,
        [article_id],
        [article_id],
        setComments,
        "comments",
    );

    return (
        <section className="comment-section">
            {isLoading && <p> Loading Comments</p>}
            {error && <p>{error}</p>}
            {data !== null &&
                comments.map((comment) => {
                    return (
                        <CommentCard
                            key={"comment-" + comment.comment_id}
                            comment={comment}
                            commentList={commentList}
                        />
                    );
                })}
        </section>
    );
};
export default Comments;
