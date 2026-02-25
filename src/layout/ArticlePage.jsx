import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../data/api";
import NavBar from "../components/NavBar";
import ArticleDisplay from "../components/ArticleDisplay";
import Interactions from "../components/Interactions";
import Comments from "../components/Comments";

const ArticlePage = () => {
    const articleId = useParams().article_id;
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isCommentOn, setIsCommentOn] = useState(false);
    console.log(isCommentOn);

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
    }, [articleId]);

    // console.log("the article:", article);

    return (
        <>
            <NavBar destination={["/", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
            {isLoading && <p>Loading Article...</p>}
            {article && <ArticleDisplay article={article} />}
            {article && (
                <Interactions
                    article={article}
                    commentState={{ isCommentOn, setIsCommentOn }}
                />
            )}
            {isCommentOn && (
                <Comments article={article} isCommentOn={isCommentOn} />
            )}
        </>
    );
};

export default ArticlePage;
