import { Link } from "react-router-dom";
import { getTopics } from "../data/api";
import NavBar from "../components/NavBar";
import useLoadData from "../hooks/useLoadData";
import AsciiAnimation from "../components/AsciiAnimation";
import { makeErrorCat, makeLoadingCat } from "../data/ascii";

const Topics = () => {
    const { data, error, isLoading } = useLoadData(getTopics, []);
    const errorCat = makeErrorCat("404", "  Topic not found!");
    const loadingCat = makeLoadingCat();

    return (
        <>
            <NavBar destination={["/articles", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
            <p>Topics:</p>
            {isLoading && <AsciiAnimation frames={loadingCat} speed={500} />}
            {error && (
                <section className="error-message">
                    <AsciiAnimation frames={errorCat} speed={500} />
                    <Link to="/">return to home page</Link>
                </section>
            )}
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
