import { formatDate, formatTime } from "../data/utils";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const date = formatDate(article.created_at);
    const time = formatTime(article.created_at);

    return (
        <section className="article-card">
            <Link to={"/articles/" + article.article_id}>
                <h3 className="text-title">{article.title}</h3>
                <img
                    alt="article image"
                    src={article.article_img_url}
                    className="article-img-preview"
                />
            </Link>
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
            <p className="date-time">{"Published:" + date + " " + time}</p>
            <p>{"Votes:" + article.votes}</p>
            <p>{"Comments:" + article.comment_count}</p>
        </section>
    );
};

export default ArticleCard;
