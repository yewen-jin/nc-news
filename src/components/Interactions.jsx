import CommentsControl from "./CommentsControl";
import Voting from "./Voting";

const Interactions = ({ article, commentState }) => {
    // console.log(article);
    return (
        <section className="article-interactions">
            <Voting article={article} />
            <CommentsControl article={article} commentState={commentState} />
        </section>
    );
};

export default Interactions;
