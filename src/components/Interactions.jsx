import CommentsControl from "./CommentsControl";
import Voting from "./Voting";

const Interactions = ({ type, article, commentState, comment, isSelf }) => {
    // console.log(article);
    console.log("interaction activated");
    if (type === "articles") {
        return (
            <section className="interactions-bar">
                {console.log("render articles interactions")}
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
                {console.log("render comments interactions")}
                <Voting type={type} item={comment} />
                {isSelf && <p>render trash icon</p>}
            </section>
        );
    }
};

export default Interactions;
