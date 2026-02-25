import upvote from "../assets/upvote.png";
import downvote from "../assets/downvote.png";
const Voting = () => {
    return (
        <>
            <img alt="downvote icon" src={downvote} />
            <img alt="upvote icon" src={upvote} />
        </>
    );
};

export default Voting;
