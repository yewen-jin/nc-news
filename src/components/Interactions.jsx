import Comments from "./Comments";
import Voting from "./Voting";

const Interactions = () => {
    return (
        <section className="article-interactions">
            <Voting />
            <Comments />
        </section>
    );
};

export default Interactions;
