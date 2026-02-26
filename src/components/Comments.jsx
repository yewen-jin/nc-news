import { useEffect } from "react";
import { getCommentsByArticle } from "../data/api";
import CommentCard from "./CommentCard";

const Comments = ({ article, commentList }) => {
    const { article_id } = article;
    const { comments, setComments } = commentList;

    useEffect(() => {
        getCommentsByArticle(article_id).then(({ comments }) => {
            // console.log(comments);
            setComments(comments);
        });
    }, [article_id]);

    return (
        <section className="comment-section">
            {comments.map((comment) => {
                return (
                    <CommentCard
                        key={"comment-" + comment.comment_id}
                        comment={comment}
                    />
                );
            })}
        </section>
    );
};
export default Comments;
