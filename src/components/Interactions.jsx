import Comments from "./Comments";
import Voting from "./Voting";

const Interactions = ({ article }) => {
    console.log(article);
    return (
        <section className="article-interactions">
            <Voting article={article} />
            <Comments article={article} />
        </section>
    );
};

export default Interactions;
