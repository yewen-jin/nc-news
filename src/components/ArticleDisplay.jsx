import { formatDate, formatTime } from "../data/utils";
import { Link } from "react-router-dom";

const ArticleDisplay = ({ article }) => {
    const date = formatDate(article.created_at);
    const time = formatTime(article.created_at);
    return (
        <section>
            <h3>{article.title}</h3>
            <div className="article-details">
                <p>
                    Author:
                    <Link to={"/users/" + article.author}>
                        <span>{article.author}</span>
                    </Link>
                </p>
                <p>
                    Topic:{" "}
                    <Link to={"/topics/" + article.topic}>
                        <span>{article.topic}</span>
                    </Link>
                </p>
                <p>{"Published:" + date + " " + time}</p>
            </div>
            <img
                alt="article image"
                src={article.article_img_url}
                className="article-img"
            />
            <p>{article.body}</p>
        </section>
    );
};
export default ArticleDisplay;
