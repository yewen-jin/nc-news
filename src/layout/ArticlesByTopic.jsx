import { useParams } from "react-router-dom";
import { getArticles } from "../data/api";
import NavBar from "../components/NavBar";
import useLoadData from "../hooks/useLoadData";
import ArticleCard from "../components/ArticleCard";

const ArticlesByTopic = () => {
    const slug = useParams().slug;
    console.log(slug);
    const { data, error, isLoading } = useLoadData(getArticles, [], [slug]);
    return (
        <>
            <NavBar destination={["/articles", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>

            {isLoading && <p>Loading articles...</p>}
            {error && <p> {error}</p>}
            {data !== null &&
                data.articles.map((article) => {
                    return <ArticleCard article={article} />;
                })}
        </>
    );
};
export default ArticlesByTopic;
