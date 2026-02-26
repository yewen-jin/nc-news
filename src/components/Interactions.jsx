import CommentsControl from "./CommentsControl";
import DeleteComment from "./DeleteComment";
import Voting from "./Voting";

const Interactions = ({
    type,
    article,
    commentState,
    comment,
    commentList,
    isSelf,
}) => {
    if (type === "articles") {
        return (
            <section className="interactions-bar">
                {/* {console.log("render articles interactions")}*/}
                <Voting type={type} item={article} />
                <CommentsControl
                    article={article}
                    commentState={commentState}
                />
            </section>
        );
    } else if (type === "comments") {
        return (
            <section className="interactions-bar">
                <Voting type={type} item={comment} />
                {isSelf && (
                    <DeleteComment
                        comment={comment}
                        commentList={commentList}
                    />
                )}
            </section>
        );
    }
};

export default Interactions;
