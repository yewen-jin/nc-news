import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

const Topics = () => {
    return (
        <>
            <NavBar>
                <Link to="/topics">Topics</Link>
                <Link to="/">Articles</Link>
            </NavBar>
        </>
    );
};
export default Topics;
