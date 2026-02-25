import CommentsControl from "./CommentsControl";
import Voting from "./Voting";

const Interactions = ({ article }) => {
    console.log(article);
    return (
        <section className="article-interactions">
            <Voting article={article} />
            <CommentsControl article={article} />
        </section>
    );
};

export default Interactions;
