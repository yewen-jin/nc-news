import { formatDate, formatTime } from "../data/utils";
import { Link } from "react-router-dom";

const ArticleDisplay = ({ article }) => {
    const date = formatDate(article.created_at);
    const time = formatTime(article.created_at);
    return (
        <section>
            <p className="article-topic">
                <Link to={"/topics/" + article.topic}>
                    <span>{article.topic}</span>
                </Link>
            </p>
            <h3>{article.title}</h3>
            <div className="article-details">
                <p>
                    <Link to={"/users/" + article.author}>
                        <img className="avatar-s" />
                        <span>{article.author}</span>
                    </Link>
                    <span className="date-time">
                        {" • " + date + " " + time}
                    </span>
                </p>
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
