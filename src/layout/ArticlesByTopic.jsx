import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Articles from "../components/Articles";

const ArticlesByTopic = () => {
    const slug = useParams().slug;
    console.log(slug);
    // const { data, error, isLoading } = useLoadData(getArticles, [], [slug]);
    return (
        <>
            <NavBar destination={["/articles", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>

            <Articles topic={slug} />
        </>
    );
};
export default ArticlesByTopic;
