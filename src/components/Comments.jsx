import { useEffect } from "react";
import { getCommentsByArticle } from "../data/api";
import CommentCard from "./CommentCard";

const Comments = ({ article, commentList }) => {
    console.log("comments  activated");
    const { article_id } = article;
    const { comments, setComments } = commentList;
    console.log(comments);

    useEffect(() => {
        getCommentsByArticle(article_id).then(({ comments }) => {
            // console.log(comments);
            setComments(comments);
        });
    }, [article_id]);

    return (
        <section className="comment-section">
            <p>There are currently {comments.length} comments.</p>
            {/* the comments.length variable updates and refreshes when new
            comments are added, but the comments doesn't rerender
            It actually does rerender but gets put in the end. everytime it refreshes,
            database reoders it in descending time order
            */}
            {comments.map((comment, i) => {
                return (
                    <div>
                        <p>this is comment number {i + 1}</p>
                        <CommentCard
                            key={"comment-" + comment.comment_id}
                            comment={comment}
                        />
                    </div>
                );
            })}
        </section>
    );
};
export default Comments;
