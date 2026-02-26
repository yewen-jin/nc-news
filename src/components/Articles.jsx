import { Link } from "react-router-dom";
import { getArticles } from "../data/api";
import useLoadData from "../hooks/useLoadData";
import ArticleCard from "./ArticleCard";

const Articles = ({ topic }) => {
    const { data, error, isLoading } = useLoadData(getArticles, [], [topic]);
    console.log(data, "<< after use loadData");

    return (
        <section className="articles">
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data !== null &&
                data.articles.map((article) => {
                    return (
                        <Link
                            key={"article-" + article.article_id}
                            to={"/articles/" + article.article_id}
                        >
                            <ArticleCard article={article} />
                        </Link>
                    );
                })}
        </section>
    );
};

export default Articles;
