import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticleById } from "../data/api";
import NavBar from "../components/NavBar";
import ArticleDisplay from "../components/ArticleDisplay";
import Interactions from "../components/Interactions";
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";
import useLoadData from "../hooks/useLoadData";

const ArticlePage = () => {
    const articleId = useParams().article_id;

    const [isAddCommentOn, setIsAddCommentOn] = useState(false);
    const [comments, setComments] = useState([]);

    // const [article, setArticle] = useState(null);
    // const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     console.log("loading article...");
    //     setIsLoading(true);
    //     getArticleById(articleId)
    //         .then(({ article }) => {
    //             setArticle(article);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    //         .finally(() => {
    //             setIsLoading(false);
    //         });
    // }, [articleId]);
    //
    const { data, error, isLoading } = useLoadData(
        getArticleById,
        [articleId],
        [articleId],
    );

    return (
        <>
            <NavBar destination={["/articles", "/topics"]}>
                <p>Articles</p>
                <p>Topics</p>
            </NavBar>

            {isLoading && <p>Loading Article...</p>}
            {error && <p>{error}</p>}

            {data !== null && <ArticleDisplay article={data.article} />}
            {data !== null && (
                <Interactions
                    type="articles"
                    article={data.article}
                    commentState={{ isAddCommentOn, setIsAddCommentOn }}
                />
            )}
            {isAddCommentOn && (
                <AddComment
                    article={data.article}
                    commentState={{ isAddCommentOn, setIsAddCommentOn }}
                    commentList={{ comments, setComments }}
                />
            )}
            {data !== null && (
                <Comments
                    article={data.article}
                    commentList={{ comments, setComments }}
                />
            )}
        </>
    );
};

export default ArticlePage;
