import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { postComment } from "../data/api";
import { Link } from "react-router-dom";

const AddComment = ({ article, commentState, commentList }) => {
    const { isLoggedIn, currentUser } = useContext(UserContext);
    const username = currentUser;
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
            {isLoggedIn && (
                <form className="comment-form" action={submitComment}>
                    <label htmlFor="comment-body">Add Your Comments:</label>
                    <input
                        type="text"
                        id="comment-body"
                        name="body"
                        required
                        // add minimum and maximum char count
                    ></input>
                    <input type="submit"></input>
                </form>
            )}
            {!isLoggedIn && (
                <p>
                    Please <Link to="/login">log in</Link> to comment
                </p>
            )}
        </section>
    );
};

export default AddComment;
