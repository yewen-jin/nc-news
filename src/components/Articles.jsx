import { Link, useSearchParams } from "react-router-dom";
import { getArticles } from "../data/api";
import useLoadData from "../hooks/useLoadData";
import ArticleCard from "./ArticleCard";
import SortArticles from "./SortArticles";

const Articles = ({ topic }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams);

    const { data, error, isLoading } = useLoadData(
        getArticles,
        [],
        [{ topic, order: "asc", sort_by: "comment_count" }],
    );
    // console.log(data, "<< after use loadData");

    return (
        <section className="articles">
            <SortArticles setSearchParams={setSearchParams} />
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
