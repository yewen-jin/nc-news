import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getArticles } from "../data/api";

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log("loading articles");
        getArticles().then(({ articles }) => {
            console.log(articles);
            setArticles(articles);
        });
    }, []);

    return (
        <section className="articles">
            {articles.length !== 0 &&
                articles.map((article) => {
                    return (
                        <Link key={article.article_id} to="/">
                            <h3> {article.title}</h3>
                        </Link>
                    );
                })}
        </section>
    );
};

export default Articles;
