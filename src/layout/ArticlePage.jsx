import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../data/api";
import NavBar from "../components/NavBar";
import ArticleDisplay from "../components/ArticleDisplay";
import Interactions from "../components/Interactions";

const ArticlePage = () => {
    const articleId = useParams().article_id;
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("loading article...");
        setIsLoading(true);
        getArticleById(articleId)
            .then(({ article }) => {
                setArticle(article);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    console.log("the article:", article);

    return (
        <>
            <NavBar destination={["/", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
            {article && <ArticleDisplay article={article} />}
            <Interactions />
        </>
    );
};

export default ArticlePage;
