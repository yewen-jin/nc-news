import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import useLoadData from "../hooks/useLoadData";
import { getTopics } from "../data/api";

const Topics = () => {
    const { data, error, isLoading } = useLoadData(getTopics, []);

    return (
        <>
            <NavBar destination={["/articles", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
            <p>Topics:</p>
            {isLoading && <p>Loading topics...</p>}
            {error && <p>{error}</p>}
            {data !== null &&
                data.topics.map((topic) => {
                    return (
                        <Link
                            to={"/topics/" + topic.slug}
                            key={"topic" + topic.slug}
                        >
                            <p>{topic.slug}</p>
                        </Link>
                    );
                })}
        </>
    );
};
export default Topics;
