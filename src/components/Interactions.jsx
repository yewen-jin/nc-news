import CommentsControl from "./CommentsControl";
import Voting from "./Voting";

const Interactions = ({ type, article, commentState, comment }) => {
    console.log(article);
    if (type === "articles") {
        return (
            <section className="interactions-bar">
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
            </section>
        );
    }
};

export default Interactions;
