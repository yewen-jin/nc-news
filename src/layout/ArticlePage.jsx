import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../data/api";
import NavBar from "../components/NavBar";

const ArticlePage = () => {
    const articleId = useParams().article_id;
    // console.log(articleId);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        console.log("loading article...");
        setIsLoading(true);
        getArticleById(articleId)
            .then(({ article }) => {
                console.log(article);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <>
            <NavBar destination={["/", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>
        </>
    );
};

export default ArticlePage;
