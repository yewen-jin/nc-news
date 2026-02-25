import { useState, useEffect } from "react";
import { getCommentsByArticle } from "../data/api";

const Comments = ({ article, isCommentOn }) => {
    const { article_id } = article;
    const [comments, setComments] = useState([]);
    useEffect(() => {
        if (isCommentOn) {
            getCommentsByArticle(article_id).then(({ comments }) => {
                console.log(comments);
                setComments(comments);
            });
        }
    }, [article_id, isCommentOn]);
    return (
        <section className="comment-section">
            <p>This is where the comments are</p>
            {comments.map((comment) => {
                return <p>{comment.body}</p>;
            })}
        </section>
    );
};
export default Comments;
