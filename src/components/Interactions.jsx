import Comments from "./Comments";
import Voting from "./Voting";
import upvote from "../assets/upvote.png";
import downvote from "../assets/downvote.png";

const Interactions = () => {
    return (
        <section className="article-interactions">
            <img alt="downvote icon" src={downvote} />
            <img alt="upvote icon" src={upvote} />
            <Voting />
            <Comments />
        </section>
    );
};

export default Interactions;
