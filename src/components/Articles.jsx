import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../data/api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("loading articles");
        setIsLoading(true);
        getArticles()
            .then(({ articles }) => {
                // console.log(articles);
                setArticles(articles);
            })
            .catch((err) => {
                console.log("error message: ", err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <section className="articles">
            {isLoading && <p>Loading...</p>}
            {articles.length !== 0 &&
                articles.map((article) => {
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
