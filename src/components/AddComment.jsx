import { useContext } from "react";
import { UserContext } from "../context/CurrentUser";
import { postComment } from "../data/api";

const AddComment = ({ article, commentState, commentList }) => {
    const username = useContext(UserContext);
    const { isAddCommentOn, setIsAddCommentOn } = commentState;
    const { comments, setComments } = commentList;

    const submitComment = (formData) => {
        const body = formData.get("body");
        postComment(article.article_id, username, body)
            .then(({ comment }) => {
                setIsAddCommentOn(!isAddCommentOn);
                setComments([comment, ...comments]);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {});
    };

    return (
        <section className="add-comment">
            <form className="comment-form" action={submitComment}>
                <label htmlFor="comment-body">Add Your Comments:</label>
                <textarea
                    type="text"
                    id="comment-body"
                    name="body"
                    rows="4"
                    cols="40"
                    required
                    // add minimum and maximum char count
                ></textarea>
                <input type="submit"></input>
            </form>
        </section>
    );
};

export default AddComment;
