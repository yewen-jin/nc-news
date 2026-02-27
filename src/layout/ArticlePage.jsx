import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { getArticleById } from "../data/api";
import { makeErrorCat } from "../data/ascii";
import NavBar from "../components/NavBar";
import ArticleDisplay from "../components/ArticleDisplay";
import Interactions from "../components/Interactions";
import Comments from "../components/Comments";
import AddComment from "../components/AddComment";
import AsciiAnimation from "../components/AsciiAnimation";
import useLoadData from "../hooks/useLoadData";

const ArticlePage = () => {
    const articleId = useParams().article_id;
    const errorCat = makeErrorCat("404", "Article not found!");

    const [isAddCommentOn, setIsAddCommentOn] = useState(false);
    const [comments, setComments] = useState([]);

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

            {isLoading && (
                <section className="loading-message">
                    <p>Loading Article...</p>
                </section>
            )}
            {error && (
                <section className="error-message">
                    {console.log(errorCat)}
                    <AsciiAnimation frames={errorCat} speed={500} />
                    <Link to="/">return to home page</Link>
                    {/* <pre>{`
         #################################
        #                               #
        #          404                  #
         #      article not found!       #
        #                               #
       #################################
                              ####
                             ######
                              ####

                           ^ _ ^
                          ( * * )
                          ={ - }=
                            |_|

                            `}</pre>*/}
                </section>
            )}

            {data !== null && (
                <section className="article">
                    <ArticleDisplay article={data.article} />
                    <Interactions
                        type="articles"
                        article={data.article}
                        commentState={{ isAddCommentOn, setIsAddCommentOn }}
                    />
                </section>
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
