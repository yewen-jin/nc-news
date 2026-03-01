import { Link, useSearchParams } from "react-router-dom";
import { makeErrorCat, makeLoadingCat } from "../data/ascii";
import { getArticles } from "../data/api";
import useLoadData from "../hooks/useLoadData";
import ArticleCard from "./ArticleCard";
import SortArticles from "./SortArticles";
import AsciiAnimation from "../components/AsciiAnimation";

const Articles = ({ topic }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const errorCat = makeErrorCat("404", "   Page not found!");
    const loadingCat = makeLoadingCat();

    const { data, error, isLoading } = useLoadData(
        getArticles,
        [searchParams],
        [
            {
                topic,
                order: searchParams.get("order"),
                sort_by: searchParams.get("sort_by"),
            },
        ],
    );

    return (
        <section className="articles">
            <SortArticles setSearchParams={setSearchParams} />

            {isLoading && <AsciiAnimation frames={loadingCat} speed={500} />}
            {error && (
                <section className="error-message">
                    <AsciiAnimation frames={errorCat} speed={500} />
                    <Link to="/">return to home page</Link>
                </section>
            )}
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
