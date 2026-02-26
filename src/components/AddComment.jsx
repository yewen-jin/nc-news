import { useContext } from "react";
import { UserContext } from "../context/User";
import { postComment } from "../data/api";
// import { useEffect } from "react";

const AddComment = ({ article, commentState, commentList }) => {
    console.log("add comment activated");
    const username = useContext(UserContext);
    const { isAddCommentOn, setIsAddCommentOn } = commentState;
    const { comments, setComments } = commentList;
    // console.log("adding comment");
    // console.log(article.article_id, username);

    const submitComment = (formData) => {
        const body = formData.get("body");
        postComment(article.article_id, username, body)
            .then(({ comment }) => {
                console.log(comment);
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
            {/* <p>Add comment here</p>*/}
            <form action={submitComment}>
                <label htmlFor="comment-body">Add Your Comments:</label>
                <input type="text" id="comment-body" name="body"></input>
                <input type="submit"></input>
            </form>
        </section>
    );
};

export default AddComment;
